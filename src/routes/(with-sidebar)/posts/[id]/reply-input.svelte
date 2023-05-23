<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let comment_input: HTMLTextAreaElement;
	export let add_comment: () => void;

	onMount(() => {
		comment_input?.focus();
		comment_input?.scrollIntoView({ block: 'center' });
	});

	onDestroy(() => {
		comment_input?.blur();
	});
</script>

<div class="flex flex-col gap-2">
	<textarea
		bind:this={comment_input}
		class="input resize-none h-60"
		placeholder="What are your thoughts"
	/>
	<button class="primary-btn self-end w-fit" on:click={add_comment}>Reply</button>
</div>
