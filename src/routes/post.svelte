<script lang="ts">
	import { goto } from '$app/navigation';
	import { text_color_tag_map } from '$lib/constants/colors';
	import CommentIcon from '$lib/icons/comment-icon.svelte';
	import SaveButton from './save-button.svelte';
	import { calcTimeDiff, createSvgFromSeed, filterByHashtag } from './utils';

	export let id: number;
	export let title: string;
	export let author: { id: number; name: string };
	export let comments: number;
	export let hashtags: [string, string][];
	export let saved: boolean;
	export let created_at: string;
</script>

<div
	tabindex="-1"
	class="box p-4 sm:p-8 flex flex-col gap-4 hover:border-brand-color-light transition cursor-pointer"
	on:click={() => {
		goto(`/posts/${id}`);
	}}
	on:keydown={(e) => {
		if (e.key == 'Enter') goto(`/posts/${id}`);
	}}
>
	<h4 class="text-2xl sm:text-3xl font-title font-semibold">
		<a href="/posts/{id}" class="hover:text-brand-color-light">{title}</a>
	</h4>

	<div class="flex items-center gap-4">
		<button
			on:click|stopPropagation={() => goto(`/users/${author.id}`)}
			class="flex w-14 h-14 p-1 bg-neutral-200 flex-shrink-0 rounded-full"
		>
			<img
				src={createSvgFromSeed({ seed: author.name })}
				alt=""
				class="w-full h-full flex rounded-full"
			/>
		</button>

		<div class="flex flex-col flex-shrink-0">
			<button
				on:click|stopPropagation={() => goto(`/users/${author.id}`)}
				class="font-bold text-lg"
			>
				{author.name}
			</button>
			<span class="text-neutral-600 text-semibold">{calcTimeDiff(created_at)} ago</span>
		</div>
	</div>

	<div class="flex gap-2 flex-wrap">
		{#each hashtags as hashtag}
			<button
				on:click|stopPropagation={() => filterByHashtag(hashtag[0])}
				class="p-1 rounded-lg font-semibold {text_color_tag_map.get(hashtag[1])}"
			>
				#{hashtag[0]}
			</button>
		{/each}
	</div>

	<div class="flex gap-4 flex-wrap [&>*]:flex-shrink-0">
		<div class="flex gap-2">
			<span class="w-6 h-6 flex">
				<CommentIcon />
			</span>
			<span class="font-semibold"> {comments} Comment{comments !== 1 ? 's' : ''} </span>
		</div>

		<SaveButton bind:saved post_id={id} />
	</div>
</div>
