<script lang="ts">
	import CreatePost from '../create-post.svelte';
	import Sorter from '../sorter.svelte';
	import Posts from '../posts.svelte';
	import Footer from '../footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex-grow flex flex-col gap-8">
	<CreatePost />

	<div class="flex flex-col gap-2">
		<Sorter />

		<Posts posts={data.posts} />
	</div>

	<div class="flex sm:hidden">
		<Footer />
	</div>
</div>
