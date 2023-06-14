<script lang="ts">
	import { color_tag_map } from '$lib/constants/colors';
	import BookmarkIcon from '$lib/icons/bookmark-icon.svelte';
	import BookmarkSolidIcon from '$lib/icons/bookmark-solid-icon.svelte';
	import CommentIcon from '$lib/icons/comment-icon.svelte';

	export let id: number;
	export let title: string;
	export let author: { id: number; name: string };
	export let comments: number;
	export let topics: [string, string][];
	export let saved: boolean;
	export let body: string;
</script>

<a
	href="/posts/{id}"
	class="box p-4 sm:p-8 flex flex-col gap-4 hover:border-brand-color-light transition"
>
	<h4 class="text-2xl sm:text-3xl font-title font-semibold">{title}</h4>

	<div class="flex items-center gap-4">
		<span class="flex w-12 h-12 bg-neutral-200 flex-shrink-0 rounded-full" />

		<div class="flex flex-col flex-shrink-0">
			<span class="font-bold text-lg">{author.name}</span>
			<span class="text-neutral-600 text-semibold">4 hrs ago</span>
		</div>

		<div class="flex-grow hidden sm:flex justify-end flex-wrap gap-2">
			{#each topics as topic}
				<p class="px-4 py-1 rounded-lg border font-semibold {color_tag_map.get(topic[1])}">
					{topic[0]}
				</p>
			{/each}
		</div>
	</div>

	<div class="flex sm:hidden gap-2 flex-wrap">
		{#each topics as topic}
			<button class="px-4 py-1 rounded-lg border font-semibold {color_tag_map.get(topic[1])}">
				{topic[0]}
			</button>
		{/each}
	</div>

	<p class="whitespace-pre">{body}</p>

	<div class="flex gap-4 flex-wrap [&>*]:flex-shrink-0">
		<div class="flex gap-2">
			<span class="w-6 h-6 flex">
				<CommentIcon />
			</span>
			<span class="font-semibold"> {comments} Comment{comments !== 1 ? 's' : ''} </span>
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
</a>
