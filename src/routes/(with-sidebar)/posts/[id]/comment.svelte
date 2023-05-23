<script lang="ts">
	import CommentIcon from '$lib/icons/comment-icon.svelte';
	import { active_reply } from '$lib/stores/active-reply';
	import Comments from './comments.svelte';
	import type { comment } from './types';

	export let comment: comment;

	$: child_reply_box_visible = $active_reply === comment.id;
</script>

<div class="flex gap-3 items-center">
	<span class="flex w-12 h-12 rounded-full flex-shrink-0 bg-neutral-100" />
	<span class="font-bold text-lg">
		{comment.author.first_name}
		{' '}
		{comment.author.last_name}
	</span>
	<span class="font-semibold hidden sm:inline text-neutral-600">4 hrs ago</span>
	<span class="font-semibold inline sm:hidden text-neutral-600">4 h</span>
</div>

<div class="flex gap-3 items-stretch">
	<div class="hidden md:flex w-12 flex-shrink-0 justify-center">
		<div class="h-full bg-neutral-200 w-px" />
	</div>

	<div class="flex flex-col gap-3 w-full flex-grow">
		<p>{comment.body}</p>

		<button class="flex gap-2 flex-shrink-0" on:click={() => active_reply.activate(comment.id)}>
			<span class="w-6 h-6 flex">
				<CommentIcon />
			</span>
			<span class="font-semibold">
				{comment.replies.length} Repl{comment.replies.length !== 1 ? 'ies' : 'y'}
			</span>
		</button>

		<div class="flex w-full">
			<div class="flex md:hidden mr-4 smc:mr-6 flex-shrink-0 justify-center">
				<div class="h-full bg-neutral-200 w-px" />
			</div>

			<div class="w-full flex-grow">
				<Comments
					bind:comments={comment.replies}
					bind:reply_box_visible={child_reply_box_visible}
				/>
			</div>
		</div>
	</div>
</div>
