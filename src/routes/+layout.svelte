<script lang="ts">
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import TrendingTopics from './trending-topics.svelte';
</script>

<svelte:head>
	<title>A Forum application with svelkit and rust by CudiLala</title>
	<meta name="description" content="A forum application with sveltekit and rust by CudiLala" />
</svelte:head>

<div class="min-h-screen bg-neutral-100">
	<Header />

	<div class="p-2 sm:p-4">
		<div class="max-w-screen-lg mx-auto flex gap-4 items-start">
			<slot />
		</div>
	</div>
</div>
