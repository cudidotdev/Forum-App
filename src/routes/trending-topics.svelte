<script lang="ts">
	import { color_tag_map } from '$lib/constants/colors';

	let tags = [
		['education', 'blue'],
		['accouting', 'red'],
		['making Money', 'green'],
		['e-commerce', 'blue'],
		['marketing', 'purple'],
		['forums', 'yellow'],
		['rust', 'red']
	];
</script>

<div class="box p-4">
	<h4 class="font-title text-2xl font-semibold text-neutral-700">Trending Hashtags</h4>

	<div class="mt-4 flex flex-col gap-2">
		{#each tags as tag}
			<a
				href="/?hashtag={tag[0]}"
				class="px-4 py-1 text-left rounded-lg font-semibold border {color_tag_map.get(tag[1])}"
			>
				#{tag[0]}
			</a>
		{/each}
	</div>
</div>
