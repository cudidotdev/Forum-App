<script lang="ts">
	import { goto } from '$app/navigation';
	import { color_tag_map } from '$lib/constants/colors';
	import CommentIcon from '$lib/icons/comment-icon.svelte';
	import SaveButton from './save-button.svelte';

	export let id: number;
	export let title: string;
	export let author: { id: number; name: string };
	export let comments: number;
	export let topics: [string, string][];
	export let saved: boolean;
	export let body: string;
	export let created_at: string;
</script>

<a
	class="box p-4 sm:p-8 flex flex-col gap-4 hover:border-brand-color-light transition"
	href="/posts/{id}"
	on:click|preventDefault={() => {
		goto(`/posts/${id}`);
	}}
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

		<SaveButton bind:saved post_id={id} />
	</div>
</a>
