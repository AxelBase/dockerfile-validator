<script>
	import { onMount } from 'svelte';
	import { content } from '../stores/editor.js';
	import FileUpload from 'lucide-svelte/icons/upload';

	let textarea;

	// Auto-resize textarea
	function resize() {
		if (!textarea) return;
		textarea.style.height = 'auto';
		textarea.style.height = textarea.scrollHeight + 'px';
	}

	// Sync local textarea with the central store
	$: if (typeof $content === 'string' && textarea && textarea.value !== $content) {
		textarea.value = $content;
		resize();
	}

	function handleInput(event) {
		content.set(event.target.value);
	}

	// File upload
	function handleFile(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				content.set(e.target.result);
			};
			reader.readAsText(file);
			event.target.value = ''; // Reset input to allow re-uploading the same file
		}
	}

	onMount(() => {
		if (textarea) {
			resize();
		}
	});
</script>

<div class="d-flex flex-column h-100">
	<div class="mb-3">
		<label class="btn btn-outline-primary btn-sm">
			<FileUpload size={16} class="me-1" />
			Upload Dockerfile
			<input type="file" class="d-none" accept=".dockerfile,Dockerfile" on:change={handleFile} />
		</label>
	</div>

	<div class="flex-grow-1 d-flex border border-custom rounded overflow-hidden">
		<div class="editor-line-numbers">
			{#each Array(Math.max(1, ($content || '').split('\n').length)) as _, i}
				<div>{i + 1}</div>
			{/each}
		</div>

		<textarea
			bind:this={textarea}
			class="form-control border-0 flex-grow-1 rounded-0"
			placeholder="Paste your Dockerfile here..."
			on:input={handleInput}
			spellcheck="false"
			style="resize: none; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5;"
		></textarea>
	</div>
</div>

<svelte:window on:resize={resize} />

<style>
	textarea:focus {
		outline: none;
		box-shadow: none;
	}
</style>