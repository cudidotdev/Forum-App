<script lang="ts">
	import api from '$lib/api';
	import BookmarkIcon from '$lib/icons/bookmark-icon.svelte';
	import BookmarkSolidIcon from '$lib/icons/bookmark-solid-icon.svelte';
	import auth from '$lib/stores/auth';
	import { onDestroy } from 'svelte';

	export let saved: boolean;
	export let post_id: number;

	function handle_save_click() {
		if (!$auth.signed_in) {
			auth.modal.open();
			auth.events.on('sign-in', exec_save_click);
			return;
		}

		exec_save_click();
	}

	function exec_save_click() {
		saved = !saved;

		if (saved) api.posts.save({ post_id, access_token: $auth.user?.access_token || '' });
		else api.posts.unsave({ post_id, access_token: $auth.user?.access_token || '' });

		auth.events.off('sign-in', exec_save_click);
	}

	onDestroy(() => {
		auth.events.off('sign-in', exec_save_click);
	});
</script>

<button
	class="flex gap-2 {saved ? 'text-brand-color' : ''}"
	on:click|preventDefault|stopPropagation={handle_save_click}
>
	<span class="w-6 h-6 flex">
		{#if !saved}
			<BookmarkIcon />
		{:else}
			<BookmarkSolidIcon />
		{/if}
	</span>
	<span class="font-semibold">
		{saved ? 'Saved' : 'Save'}
	</span>
</button>
