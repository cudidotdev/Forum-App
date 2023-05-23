<script lang="ts">
	import { partial_id } from '$lib/stores/partial-id';
	import Comment from './comment.svelte';
	import type { comment } from './types';

	export let comments: comment[];

	export let reply_box_visible = false;

	let comment_input: HTMLTextAreaElement;

	function add_comment() {
		if (comment_input.value.trim() === '') return;

		let id = partial_id.grab();
		comments = [
			...comments,
			{
				id,
				body: comment_input.value.trim(),
				replies: [],
				author: { first_name: id.toString(), last_name: 'Lala' }
			}
		];

		comment_input.value = '';
	}
</script>

<div class="flex flex-col gap-2">
	{#each comments as comment (comment.id)}
		<Comment {comment} />
	{/each}
	{#if reply_box_visible}
		<div class="flex flex-col gap-2">
			<textarea
				bind:this={comment_input}
				class="input resize-none h-60"
				placeholder="What are your thoughts"
			/>
			<button class="primary-btn self-end w-fit" on:click={add_comment}>Reply</button>
		</div>
	{/if}
</div>
