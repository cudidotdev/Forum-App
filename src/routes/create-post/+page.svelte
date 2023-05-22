<script lang="ts">
	import { onMount } from 'svelte';

	let title_input: HTMLInputElement;

	onMount(() => {
		title_input?.focus();
	});
</script>

<div class="flex flex-col gap-4 w-full">
	<h1 class="font-title text-xl font-semibold">Create Post</h1>

	<div class="box p-2 sm:p-4 w-full max-w-screen-sm flex flex-col gap-4">
		<input type="text" placeholder="Title" class="input" bind:this={title_input} />

		<div class="box py-2 px-4 bg-neutral-50">
			<span class="text-neutral-600 font-semibold">Topics</span>
		</div>

		<textarea class="input resize-none h-96 sm:h-80" placeholder="Body" />

		<div class="flex gap-4">
			<button class="primary-btn"> Submit </button>
			<button class="secondary-btn" type="button" on:click={() => history.back()}> Cancel </button>
		</div>
	</div>
</div>
