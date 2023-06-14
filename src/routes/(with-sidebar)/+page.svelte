<script lang="ts">
	import CreatePost from '../create-post.svelte';
	import Sorter from '../sorter.svelte';
	import Posts from '../posts.svelte';
	import Footer from '../footer.svelte';
	import type { PageData } from './$types';
	import auth from '$lib/stores/auth';
	import { onMount, onDestroy } from 'svelte';
	import { invalidate } from '$app/navigation';

	export let data: PageData;

	function invalidate_data() {
		invalidate('home:posts');
	}

	onMount(() => {
		auth.events.on('user-change', invalidate_data);
	});

	onDestroy(() => {
		auth.events.off('user-change', invalidate_data);
	});
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
