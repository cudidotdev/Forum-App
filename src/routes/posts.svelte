<script lang="ts">
	import Post from './post.svelte';

	type post = {
		id: number;
		title: string;
		body: string;
		author: { first_name: string; last_name: string };
		comments: number;
		saved: boolean;
		tags: [string, string][];
	};

	let posts: post[] = [
		{
			id: 1,
			title: 'What makes a good font for bloggers?',
			author: { first_name: 'Cudi', last_name: 'Lala' },
			body: 'Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections. \
             Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections.',
			comments: 16,
			saved: false,
			tags: [
				['Making Money', 'green'],
				['Accounting', 'red'],
				['Education', 'blue']
			]
		},
		{
			id: 2,
			title: 'What makes a good font for bloggers?',
			author: { first_name: 'Cudi', last_name: 'Lala' },
			body: 'Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections. \
             Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections.',
			comments: 16,
			saved: false,
			tags: [
				['Making Money', 'green'],
				['Accounting', 'red'],
				['Education', 'blue']
			]
		}
	];
</script>

{#each posts as post (post.id)}
	<Post {...post} />
{/each}
