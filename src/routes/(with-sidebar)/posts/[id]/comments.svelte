<script lang="ts">
	import { active_reply } from '$lib/stores/active-reply';
	import { partial_id } from '$lib/stores/partial-id';
	import Comment from './comment.svelte';
	import ReplyInput from './reply-input.svelte';
	import type { comment } from './types';

	export let comments: comment[];

	export let parent_id: number | undefined;

	export let reply_box_visible = false;

	export function add_comment(comment_input: HTMLTextAreaElement, top = false) {
		if (comment_input.value.trim() === '') return;

		let id = partial_id.grab();

		if (top)
			comments.unshift({
				id,
				body: comment_input.value.trim(),
				replies: [],
				author: { first_name: 'Cudi', last_name: 'Lala' }
			});
		else
			comments.push({
				id,
				body: comment_input.value.trim(),
				replies: [],
				author: { first_name: 'Cudi', last_name: 'Lala' }
			});

		comments = comments;

		comment_input.value = '';

		active_reply.deactivate();
	}
</script>

<div class="flex flex-col gap-2">
	{#each comments as comment (comment.id)}
		<Comment bind:comment />
	{/each}
	{#if reply_box_visible}
		<ReplyInput {add_comment} />
	{/if}
</div>
