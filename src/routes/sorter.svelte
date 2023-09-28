<script lang="ts">
	import BalloonIcon from '$lib/icons/balloon-icon.svelte';
	import RocketIcon from '$lib/icons/rocket-icon.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { removeHashtag } from './utils';

	$: sort = $page.url.searchParams.get('sort') || 'highest';
	$: hashtag = $page.url.searchParams.get('hashtag');

	function sortBy(sort: 'latest' | 'highest') {
		let search = new URLSearchParams(window.location.search);
		search.set('sort', sort);

		let url = new URL(window.location.href);
		url.search = search.toString();

		goto(url);
	}
</script>

{#if !!hashtag}
	<button
		on:click={() => removeHashtag()}
		class="text-2xl w-fit font-semibold text-brand-color hover:text-brand-color-light"
		>#{hashtag}</button
	>
{/if}

<div class="flex flex-col gap-2">
	<div class="box px-4 py-2 flex justify-start items-center gap-4">
		<button
			on:click={() => sortBy('latest')}
			class="flex-grow-0 flex-shrink-0 font-semibold text-lg py-1 px-2 flex gap-2 w-fit
      {sort === 'latest' ? 'box !bg-neutral-50' : 'border border-transparent'}"
		>
			<span class="flex w-6 h-6">
				<BalloonIcon />
			</span>
			New
		</button>

		<button
			on:click={() => sortBy('highest')}
			class="w-fit font-semibold text-lg py-1 px-2 flex gap-2 flex-grow-0 flex-shrink-0
      {sort === 'highest' ? 'box !bg-neutral-50' : 'border border-transparent'}"
		>
			<span class="flex w-6 h-6">
				<RocketIcon />
			</span>
			Top
		</button>
	</div>
</div>
