<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
</script>

<svelte:head>
	<title>A Forum application with svelkit and rust by CudiLala</title>
	<meta name="description" content="A forum application with sveltekit and rust by CudiLala" />
</svelte:head>

<div class="min-h-screen bg-neutral-100">
	<Header />

	<slot />
</div>
