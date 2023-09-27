<script lang="ts">
	import type { post } from '$lib/api/posts';
	import Post from './post.svelte';

	export let posts: post[];
</script>

{#each posts as post (post.id)}
	<Post {...post} />
{/each}
