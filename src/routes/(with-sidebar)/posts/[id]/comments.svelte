<script lang="ts">
	import Comment from './comment.svelte';
	import ReplyInput from './reply-input.svelte';
	import type { comment } from './types';

	export let comments: comment[];

	export let parent_id: number | undefined;

	export let add_comment: (comment_input: HTMLTextAreaElement, under?: number) => void;

	export let reply_box_visible = false;
</script>

<div class="flex flex-col gap-2">
	{#each comments as comment (comment.id)}
		<Comment {add_comment} bind:comment />
	{/each}
	{#if reply_box_visible}
		<ReplyInput {parent_id} {add_comment} />
	{/if}
</div>
