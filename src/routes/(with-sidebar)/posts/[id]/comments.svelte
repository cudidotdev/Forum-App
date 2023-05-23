<script lang="ts">
	import { active_reply } from '$lib/stores/active-reply';
	import { partial_id } from '$lib/stores/partial-id';
	import Comment from './comment.svelte';
	import ReplyInput from './reply-input.svelte';
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
				author: { first_name: 'Cudi', last_name: 'Lala' }
			}
		];

		comment_input.value = '';

		active_reply.deactivate();
	}
</script>

<div class="flex flex-col gap-2">
	{#each comments as comment (comment.id)}
		<Comment {comment} />
	{/each}
	{#if reply_box_visible}
		<ReplyInput bind:comment_input {add_comment} />
	{/if}
</div>
