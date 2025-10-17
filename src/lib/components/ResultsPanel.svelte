<script>
	import { results, content } from '../stores/editor.js';

	function getStatusClass(valid) {
		return valid ? 'alert-success' : 'alert-danger';
	}

	function scrollToLine(line) {
		const editor = document.querySelector('textarea');
		if (!editor) return;

		const lines = editor.value.split('\n');
		if (line > lines.length) return;

		const targetPosition =
			lines.slice(0, line - 1).reduce((acc, curr) => acc + curr.length, 0) + (line - 1);
		editor.focus();
		editor.setSelectionRange(targetPosition, targetPosition + lines[line - 1].length);
	}
</script>

<div class="h-100 d-flex flex-column">
	<div class="alert {getStatusClass($results.valid)} mb-4">
		{#if $results.valid}
			<h5 class="mb-0"><i class="bi bi-check-circle-fill me-2"></i> Valid Dockerfile</h5>
			<small class="text-muted">{$results.totalLines} lines • No issues found.</small>
		{:else}
			<h5 class="mb-0">
				<i class="bi bi-x-circle-fill me-2"></i> Invalid Dockerfile
			</h5>
			<small class="text-muted">
				{$results.errors.length} error(s) • {$results.warnings.length} warning(s)
			</small>
		{/if}
	</div>

	{#if $results.errors.length > 0}
		<h6 class="text-danger mb-2"><i class="bi bi-shield-fill-x me-2"></i> Errors</h6>
		{#each $results.errors as error}
			<div class="alert alert-danger d-flex justify-content-between align-items-center mb-2 p-2">
				<span><strong>Line {error.line}:</strong> {error.message}</span>
			</div>
		{/each}
	{/if}

	{#if $results.warnings.length > 0}
		<h6 class="text-warning mb-2 mt-3"><i class="bi bi-shield-fill-exclamation me-2"></i> Warnings</h6>
		{#each $results.warnings as warning}
			<div class="alert alert-warning d-flex justify-content-between align-items-center mb-2 p-2">
				<span><strong>Line {warning.line}:</strong> {warning.message}</span>
			</div>
		{/each}
	{/if}

	{#if $content && $results.valid}
		<div class="flex-grow-1 d-flex align-items-center justify-content-center text-muted mt-4">
			<div class="text-center">
				<i class="bi bi-rocket-takeoff-fill fs-1 mb-3 text-success"></i>
				<h5>All Systems Go!</h5>
				<p>Your Dockerfile looks perfect and is ready to build. 🚀</p>
			</div>
		</div>
	{/if}
</div>