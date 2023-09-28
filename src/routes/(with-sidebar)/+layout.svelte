<script lang="ts">
	import Footer from '../footer.svelte';
	import TrendingTopics from '../trending-topics.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<slot />

<div class="flex-shrink-0 flex-grow-0 md:w-72 lg:w-80 hidden md:flex flex-col gap-4">
	<TrendingTopics hashtags={data.hashtags} />

	<Footer />
</div>
