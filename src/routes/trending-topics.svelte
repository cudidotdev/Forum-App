<script lang="ts">
	import Box from '$lib/components/box.svelte';
	import { color_tag_map } from '$lib/constants/colors';

	let tags = [
		['Education', 'blue'],
		['Accouting', 'red'],
		['Making Money', 'yellow'],
		['E-commerce', 'voilet'],
		['Marketing', 'purple'],
		['Forums', 'blue'],
		['Rust', 'red']
	];
</script>

<Box _class="p-4">
	<h4 class="font-title text-2xl font-semibold text-neutral-700">Trending Topics</h4>

	<div class="mt-4 flex flex-col gap-2">
		{#each tags as tag}
			<button
				class="px-4 py-1 text-left rounded-lg border font-semibold {color_tag_map.get(tag[1])}"
			>
				{tag[0]}
			</button>
		{/each}
	</div>
</Box>
