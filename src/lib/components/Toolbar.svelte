<script>
	import { content, results, manualValidate } from '../stores/editor.js';
	import RefreshCw from 'lucide-svelte/icons/refresh-cw';
	import Download from 'lucide-svelte/icons/download';
	import Play from 'lucide-svelte/icons/play';
	import { get } from 'svelte/store';

	function clearEditor() {
		content.set('');
	}

	function downloadReport(format) {
		const text = get(content);
		if (!text || !text.trim()) return;

		const report = {
			timestamp: new Date().toISOString(),
			valid: get(results).valid,
			errors: get(results).errors,
			warnings: get(results).warnings,
			totalLines: get(results).totalLines,
			dockerfile: text
		};

		let blob;
		let fileName = `AxelBase-Report.${format}`;

		if (format === 'json') {
			blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
		} else if (format === 'txt') {
			const txtContent = `AxelBase Dockerfile Validation Report
==================================================
Status: ${report.valid ? 'VALID' : 'INVALID'}
Errors: ${report.errors.length}
Warnings: ${report.warnings.length}
Lines: ${report.totalLines}

--- ERRORS ---
${report.errors.map((e) => `Line ${e.line}: ${e.message}`).join('\n') || 'None'}

--- WARNINGS ---
${report.warnings.map((w) => `Line ${w.line}: ${w.message}`).join('\n') || 'None'}
`;
			blob = new Blob([txtContent], { type: 'text/plain' });
		}

		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}
</script>

<nav class="p-3 border-bottom border-custom">
	<div class="d-flex justify-content-between align-items-center">
		<div class="btn-group" role="group">
			<button class="btn btn-outline-danger btn-sm" title="Clear Editor" on:click={clearEditor}>
				<RefreshCw size={16} class="me-1" /> Clear
			</button>
			<button
				class="btn btn-outline-success btn-sm"
				title="Validate Now"
				on:click={manualValidate}
			>
				<Play size={16} class="me-1" /> Validate
			</button>
		</div>

		<div class="btn-group" role="group">
			<button
				class="btn btn-outline-secondary btn-sm dropdown-toggle"
				data-bs-toggle="dropdown"
				disabled={!$content || !$content.trim()}
			>
				<Download size={16} class="me-1" /> Export Report
			</button>
			<ul class="dropdown-menu dropdown-menu-end">
				<li>
					<button class="dropdown-item" on:click={() => downloadReport('json')}>As JSON</button>
				</li>
				<li>
					<button class="dropdown-item" on:click={() => downloadReport('txt')}>As TXT</button>
				</li>
			</ul>
		</div>
	</div>
</nav>