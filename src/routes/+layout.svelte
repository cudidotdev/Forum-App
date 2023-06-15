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
	<title>A Forum application with svelkit and rust by CudiLala</title>
	<meta name="description" content="A forum application with sveltekit and rust by CudiLala" />
</svelte:head>

<Notification />

<PageLoader active={$page_loader} />

<div class="min-h-screen bg-neutral-100">
	<Header />

	<div class="p-2 sm:p-4">
		<div class="max-w-screen-lg mx-auto flex gap-4 items-start">
			<slot />
		</div>
	</div>
</div>

<AuthModal />
