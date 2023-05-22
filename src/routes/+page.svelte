<script lang="ts">
	import TrendingTopics from './trending-topics.svelte';
	import CreatePost from './create-post.svelte';
	import Sorter from './sorter.svelte';
	import Posts from './posts.svelte';
	import Footer from './footer.svelte';
</script>

<div class="p-2 sm:p-4">
	<div class="max-w-screen-lg mx-auto flex gap-4 items-start">
		<div class="flex-grow flex flex-col gap-8">
			<CreatePost />

			<div class="flex flex-col gap-2">
				<Sorter />

				<Posts />
			</div>

			<div class="flex sm:hidden">
				<Footer />
			</div>
		</div>

		<div class="flex-shrink-0 flex-grow-0 md:w-72 lg:w-80 hidden md:flex flex-col gap-4">
			<TrendingTopics />

			<Footer />
		</div>
	</div>
</div>
