<script>
	import Footer from '../footer.svelte';
	import TrendingTopics from '../trending-topics.svelte';
</script>

<slot />

<div class="flex-shrink-0 flex-grow-0 md:w-72 lg:w-80 hidden md:flex flex-col gap-4">
	<TrendingTopics />

	<Footer />
</div>
