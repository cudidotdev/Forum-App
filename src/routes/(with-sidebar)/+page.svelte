<script lang="ts">
	import CreatePost from '../create-post.svelte';
	import Sorter from '../sorter.svelte';
	import Posts from '../posts.svelte';
	import Footer from '../footer.svelte';
	import type { PageData } from './$types';
	import api from '$lib/api';
	import auth from '$lib/stores/auth';
	import { page } from '$app/stores';
	import type { sort as sortType } from '$lib/api/posts';
	import pageLoader from '$lib/stores/page-loader';
	import notification from '$lib/stores/notification';

	export let data: PageData;

	let { limit, page: lastPage } = data.fetchParams;
	let fetchingNewPosts = false;
	let lastPostReached = false;

	let endMarker: HTMLDivElement;
	let innerHeight: number;
	let scrollY: number;

	$: posts = data.posts;
	$: sort = ($page.url.searchParams.get('sort') || 'highest') as sortType;
	$: hashtag = $page.url.searchParams.get('hashtag') || undefined;

	//reset all cursors if sort or hashtag changes
	$: resetCursors(sort, hashtag);

	$: fetchingNewPosts ? pageLoader.start() : pageLoader.stop();

	async function addPosts(limit: number, page: number) {
		if (page == 1) return (fetchingNewPosts = false);

		let res = await api.posts.fetch({
			page,
			limit,
			sort,
			hashtag,
			access_token: $auth.user?.access_token
		});

		fetchingNewPosts = false;

		if (!res.success)
			notification.push_notification({
				item: res.error?.message || 'Unknown error',
				type: 'error'
			});
		else {
			if (res.data.length == 0) {
				--lastPage;
				lastPostReached = true;
			}

			posts.push(...res.data);
			posts = posts;
		}
	}

	let lastScroll = Number.POSITIVE_INFINITY;

	function handleWindowScroll() {
		let currentPosition = endMarker.getBoundingClientRect().y;

		//if scrolled down and no new post is fetching
		if (
			lastScroll < scrollY &&
			currentPosition - 20 < innerHeight &&
			!fetchingNewPosts &&
			!lastPostReached
		) {
			fetchingNewPosts = true;
			addPosts(limit, ++lastPage);
		}

		lastScroll = scrollY;
	}

	function resetCursors() {
		lastPage = 1;
		lastPostReached = false;
	}
</script>

<svelte:window bind:innerHeight bind:scrollY on:scroll={handleWindowScroll} />

<svelte:head>
	<title>A Forum application with svelkit and rust by CudiLala</title>
	<meta name="description" content="A forum application with sveltekit and rust by CudiLala" />
</svelte:head>

<div class="flex-grow flex flex-col gap-8">
	<CreatePost />

	<div class="flex flex-col gap-2">
		<Sorter />

		<Posts {posts} />

		<div bind:this={endMarker} />
	</div>

	<div class="flex sm:hidden">
		<Footer />
	</div>
</div>
