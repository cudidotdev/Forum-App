<script lang="ts">
	import api from '$lib/api';
	import { color_tag_map, text_color_tag_map } from '$lib/constants/colors';
	import CommentIcon from '$lib/icons/comment-icon.svelte';
	import page_loader from '$lib/stores/page-loader';
	import { count_replies } from '$lib/utils';
	import SaveButton from '../../../save-button.svelte';
	import { calcTimeDiff, createSvgFromSeed, filterByHashtag } from '../../../utils';
	import type { PageData } from './$types';
	import CommentSorter from './comment-sorter.svelte';
	import Comments from './comments.svelte';

	export let data: PageData;

	$: comments_n = count_replies(data.comments);

	let comment_input: HTMLTextAreaElement;
	let comment_section: Comments;
	let sort = 'highest';

	async function sort_by_latest() {
		sort = 'latest';

		page_loader.start();

		const res = await api.posts.fetch_comments({ post_id: data.id, sort: 'latest' });

		page_loader.stop();

		if (res.success) {
			data.comments = res.data;
			data = data;
		}
	}

	async function sort_by_highest() {
		sort = 'highest';

		page_loader.start();

		const res = await api.posts.fetch_comments({ post_id: data.id, sort: 'highest' });

		page_loader.stop();

		if (res.success) {
			data.comments = res.data;
			data = data;
		}
	}
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="grow w-full box p-4 sm:p-8 flex flex-col gap-4">
	<h4 class="text-2xl sm:text-3xl font-title font-semibold">{data.title}</h4>

	<div class="flex items-center gap-4">
		<a href="/users/{data.author.id}">
			<span class="flex w-14 h-14 p-1 bg-neutral-100 flex-shrink-0 rounded-full">
				<img
					src={createSvgFromSeed({ seed: data.author.name })}
					alt=""
					class="w-full h-full flex rounded-full"
				/>
			</span>
		</a>

		<div class="flex flex-col flex-shrink-0">
			<a href="/users/{data.author.id}" class="font-bold text-lg">{data.author.name}</a>
			<span class="text-neutral-600 text-semibold">{calcTimeDiff(data.created_at)} ago</span>
		</div>
	</div>

	<div class="flex-grow flex flex-wrap gap-2">
		{#each data.hashtags as hashtag}
			<button
				on:click={() => filterByHashtag(hashtag[0])}
				class="p-1 rounded-lg font-semibold {text_color_tag_map.get(hashtag[1])}"
			>
				#{hashtag[0]}
			</button>
		{/each}
	</div>

	<p class="whitespace-pre-wrap my-6 font-medium">{data.body}</p>

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

	<CommentSorter {sort_by_highest} {sort_by_latest} {sort} />

	<Comments
		post_id={data.id}
		parent_id={undefined}
		bind:this={comment_section}
		bind:comments={data.comments}
	/>
</div>
