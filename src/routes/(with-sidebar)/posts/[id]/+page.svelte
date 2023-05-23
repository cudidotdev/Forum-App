<script lang="ts">
	import { color_tag_map } from '$lib/constants/colors';
	import BookmarkIcon from '$lib/icons/bookmark-icon.svelte';
	import BookmarkSolidIcon from '$lib/icons/bookmark-solid-icon.svelte';
	import CommentIcon from '$lib/icons/comment-icon.svelte';
	import { partial_id } from '$lib/stores/partial-id';
	import { count_replies } from '$lib/utils';
	import type { PageData } from './$types';
	import CommentSorter from './comment-sorter.svelte';
	import Comments from './comments.svelte';

	export let data: PageData;
	let id: number;
	let title: string;
	let tags: [string, string][];
	let body: string;
	let saved: boolean;
	let comments: typeof data.comments;

	$: {
		id = data.id;
		title = data.title;
		tags = data.tags;
		body = data.body;
		saved = data.saved;
		comments = data.comments;
	}

	$: comments_n = count_replies(comments);

	let comment_input: HTMLTextAreaElement;
	let comment_section: Comments;

	function add_comment() {
		if (comment_input.value.trim() === '') return;

		let id = partial_id.grab();
		comments = [
			{
				id,
				body: comment_input.value.trim(),
				replies: [],
				author: { first_name: 'Cudi', last_name: 'Lala' }
			},
			...comments
		];

		comment_input.value = '';
	}
</script>

<div class="box p-4 sm:p-8 flex flex-col gap-4">
	<h4 class="text-2xl sm:text-3xl font-title font-semibold">{title}</h4>

	<div class="flex items-center gap-4">
		<span class="flex w-12 h-12 bg-neutral-100 flex-shrink-0 rounded-full" />

		<div class="flex flex-col flex-shrink-0">
			<span class="font-bold text-lg">Cudi Lala</span>
			<span class="text-neutral-600 text-semibold">4 hrs ago</span>
		</div>

		<div class="flex-grow hidden sm:flex justify-end flex-wrap gap-2">
			{#each tags as tag}
				<p class="px-4 py-1 rounded-lg border font-semibold {color_tag_map.get(tag[1])}">
					{tag[0]}
				</p>
			{/each}
		</div>
	</div>

	<div class="flex sm:hidden gap-2 flex-wrap">
		{#each tags as tag}
			<button class="px-4 py-1 rounded-lg border font-semibold {color_tag_map.get(tag[1])}">
				{tag[0]}
			</button>
		{/each}
	</div>

	<p>{body}</p>

	<div class="flex gap-4 flex-wrap [&>*]:flex-shrink-0">
		<div class="flex gap-2">
			<span class="w-6 h-6 flex">
				<CommentIcon />
			</span>
			<span class="font-semibold">
				{comments_n} Comment{comments_n !== 1 ? 's' : ''}
			</span>
		</div>

		<div class="flex gap-2 {saved ? 'text-brand-color' : ''}">
			<span class="w-6 h-6 flex">
				{#if !saved}
					<BookmarkIcon />
				{:else}
					<BookmarkSolidIcon />
				{/if}
			</span>
			<span class="font-semibold">{saved ? 'Saved' : 'Save'}</span>
		</div>
	</div>

	<div class="my-4">
		<p><span>Comment as </span> <span class="text-link-blue">@cudilala</span></p>
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

	<Comments bind:this={comment_section} {comments} />
</div>
