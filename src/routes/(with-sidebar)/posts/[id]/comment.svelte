<script lang="ts">
	import type { reply } from '$lib/api/posts';
	import CommentIcon from '$lib/icons/comment-icon.svelte';
	import { active_reply } from '$lib/stores/active-reply';
	import { count_replies } from '$lib/utils';
	import Comments from './comments.svelte';

	export let comment: reply;
	export let post_id: number;

	$: child_reply_box_visible = $active_reply === comment.id;

	$: replies_n = count_replies(comment.replies);
</script>

<div class="flex gap-3 items-center">
	<a href="/users/{comment.author.id}">
		<span class="flex w-12 h-12 rounded-full flex-shrink-0 bg-neutral-100" />
	</a>

	<a href="/users/{comment.author.id}" class="font-bold text-lg">
		{comment.author.name}
	</a>

	<span class="font-semibold hidden sm:inline text-neutral-600">4 hrs ago</span>
	<span class="font-semibold inline sm:hidden text-neutral-600">4 h</span>
</div>

<div class="flex gap-3 items-stretch">
	<div class="hidden md:flex w-12 flex-shrink-0 justify-center">
		<div class="h-full bg-neutral-200 w-px" />
	</div>

	<div class="flex flex-col gap-3 w-full flex-grow">
		<p class="whitespace-pre-wrap">{comment.body}</p>

		<button
			class="flex gap-2 flex-shrink-0 disabled:opacity-60"
			on:click={() => active_reply.activate(comment.id)}
			disabled={Math.sign(comment.id) === -1}
		>
			<span class="w-6 h-6 flex">
				<CommentIcon />
			</span>
			<span class="font-semibold">
				{replies_n} Repl{replies_n !== 1 ? 'ies' : 'y'}
			</span>
		</button>

		<div class="flex w-full">
			<div class="flex md:hidden mr-4 smc:mr-6 flex-shrink-0 justify-center">
				<div class="h-full bg-neutral-200 w-px" />
			</div>

			<div class="w-full flex-grow">
				<Comments
					{post_id}
					bind:comments={comment.replies}
					bind:reply_box_visible={child_reply_box_visible}
					parent_id={comment.id}
				/>
			</div>
		</div>
	</div>
</div>
