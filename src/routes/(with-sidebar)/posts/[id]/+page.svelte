<script lang="ts">
	import { color_tag_map } from '$lib/constants/colors';
	import BookmarkIcon from '$lib/icons/bookmark-icon.svelte';
	import BookmarkSolidIcon from '$lib/icons/bookmark-solid-icon.svelte';
	import CommentIcon from '$lib/icons/comment-icon.svelte';
	import { count_replies } from '$lib/utils';
	import SaveButton from '../../../save-button.svelte';
	import type { PageData } from './$types';
	import CommentSorter from './comment-sorter.svelte';
	import Comments from './comments.svelte';

	export let data: PageData;

	$: comments_n = count_replies(data.comments);

	let comment_input: HTMLTextAreaElement;
	let comment_section: Comments;
</script>

<div class="grow w-full box p-4 sm:p-8 flex flex-col gap-4">
	<h4 class="text-2xl sm:text-3xl font-title font-semibold">{data.title}</h4>

	<div class="flex items-center gap-4">
		<span class="flex w-12 h-12 bg-neutral-100 flex-shrink-0 rounded-full" />

		<div class="flex flex-col flex-shrink-0">
			<span class="font-bold text-lg">{data.author.name}</span>
			<span class="text-neutral-600 text-semibold">4 hrs ago</span>
		</div>

		<div class="flex-grow hidden sm:flex justify-end flex-wrap gap-2">
			{#each data.topics as topic}
				<p class="px-4 py-1 rounded-lg border font-semibold {color_tag_map.get(topic[1])}">
					{topic[0]}
				</p>
			{/each}
		</div>
	</div>

	<div class="flex sm:hidden gap-2 flex-wrap">
		{#each data.topics as topic}
			<button class="px-4 py-1 rounded-lg border font-semibold {color_tag_map.get(topic[1])}">
				{topic[0]}
			</button>
		{/each}
	</div>

	<p class="whitespace-pre">{data.body}</p>

	<div class="flex gap-4 flex-wrap [&>*]:flex-shrink-0">
		<div class="flex gap-2">
			<span class="w-6 h-6 flex">
				<CommentIcon />
			</span>
			<span class="font-semibold">
				{comments_n} Comment{comments_n !== 1 ? 's' : ''}
			</span>
		</div>

		<SaveButton bind:saved={data.saved} post_id={data.id} />
	</div>

	<div class="my-4">
		<div class="flex flex-col gap-2">
			<textarea
				bind:this={comment_input}
				class="input resize-none h-60"
				placeholder="What are your thoughts"
			/>
			<button
				class="primary-btn self-end w-fit"
				on:click={() => comment_section.add_comment(comment_input, true)}>Comment</button
			>
		</div>
	</div>

	<CommentSorter />

	<Comments
		post_id={data.id}
		parent_id={undefined}
		bind:this={comment_section}
		bind:comments={data.comments}
	/>
</div>
