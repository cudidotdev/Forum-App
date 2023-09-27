<script lang="ts">
	import Posts from '../../../posts.svelte';
	import type { PageData } from './$types';
	import auth from '$lib/stores/auth';

	export let data: PageData;
</script>

<div class="w-full flex flex-col gap-2">
	<div
		class="box flex justify-start gap-8 px-4 md:px-8 py-2 w-full font-title font-semibold text-lg"
	>
		<a href="/users/{data.user.id}">Posts</a>
		<a href="/users/{data.user.id}/saves" class="text-brand-color">Saved</a>
	</div>
</div>

<Posts posts={data.posts} />
