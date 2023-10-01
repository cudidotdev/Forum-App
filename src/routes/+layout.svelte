<script lang="ts">
	import '../app.css';
	import AuthModal from '$lib/components/auth/modal.svelte';
	import Header from './header.svelte';
	import { afterNavigate, beforeNavigate, invalidate } from '$app/navigation';
	import api from '$lib/api';
	import PageLoader from '$lib/components/loaders/page-loader.svelte';
	import page_loader from '$lib/stores/page-loader';
	import Notification from '$lib/components/notification.svelte';
	import { onDestroy, onMount } from 'svelte';
	import auth from '$lib/stores/auth';

	function invalidate_data() {
		invalidate('app:user');
	}

	onMount(() => {
		auth.events.on('user-change', invalidate_data);
	});

	onDestroy(() => {
		auth.events.off('user-change', invalidate_data);
	});

	beforeNavigate(() => {
		page_loader.start();
	});

	afterNavigate(() => {
		page_loader.stop();
		api.auth.verify_auth();
	});
</script>

<svelte:head>
	<title>A Forum application with svelkit and rust by Augustine Madu</title>
	<meta
		name="description"
		content="A forum application with sveltekit and rust by Augustine Madu"
	/>
	<meta
		name="keywords"
		content="Forum application, Svelte, Rust, Rust side projects, Svelte, side projects, side projects, Actix web side project, Actix web, Actix Web sample project, Web Application Developer, Job, Forum, Reddit projects, Javascript, Typescript, Rust"
	/>
	<meta property="og:title" content="A Forum application with svelkit and rust by CudiLala" />
	<meta
		property="og:description"
		content="A forum application with sveltekit and rust by Augustine Madu"
	/>
	<meta property="og:url" content="https://forum.projects.cudi.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:image" content="https://forum.projects.cudi.dev/ogimage.png" />
	<meta property="og:image:width" content="1551" />
	<meta property="og:image:height" content="917" />

	<meta
		name="twitter:description"
		content="A forum application with sveltekit and rust by Augustine Madu"
	/>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@CudiLala_" />
	<meta property="twitter:url" content="https://forum.projects.cudi.dev" />
	<meta property="twitter:image" content="https://forum.projects.cudi.dev/ogimage.png" />
</svelte:head>

<Notification />

<PageLoader active={$page_loader} />

<div class="min-h-screen bg-neutral-100">
	<Header />

	<div class="p-4">
		<div class="max-w-screen-lg mx-auto flex gap-4 items-start">
			<slot />
		</div>
	</div>
</div>

<AuthModal />
