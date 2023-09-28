<script lang="ts">
	import { color_tag_map } from '$lib/constants/colors';
	import { filterByHashtag } from './utils';

	export let hashtags: [string, string][];
</script>

<div class="box p-4">
	<h4 class="font-title text-2xl font-semibold text-neutral-700">Trending Hashtags</h4>

	<div class="mt-4 flex flex-col gap-2">
		{#each hashtags as tag}
			<button
				on:click|stopPropagation={() => filterByHashtag(tag[0])}
				class="px-4 py-1 text-left rounded-lg font-semibold border {color_tag_map.get(tag[1])}"
			>
				#{tag[0]}
			</button>
		{/each}
	</div>
</div>
