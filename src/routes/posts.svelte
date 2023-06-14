<script lang="ts">
	import Post from './post.svelte';

	type post = {
		id: number;
		author: {
			name: string;
			id: number;
		};
		body: string;
		comments: number;
		saved: boolean;
		saves: number;
		title: string;
		topics: [string, string][];
	};

	export let posts: post[];
</script>

{#each posts as post (post.id)}
	<Post {...post} />
{/each}
