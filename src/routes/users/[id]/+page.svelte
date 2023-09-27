<script lang="ts">
	import Posts from '../../posts.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full flex flex-col gap-2">
	<div
		class="box flex justify-start gap-8 px-4 md:px-8 py-2 w-full font-title font-semibold text-lg"
	>
		<a href="/users/{data.user.id}" class="text-brand-color">Posts</a>
		<a href="/users/{data.user.id}/saves">Saved</a>
	</div>
</div>

<Posts posts={data.posts} />
