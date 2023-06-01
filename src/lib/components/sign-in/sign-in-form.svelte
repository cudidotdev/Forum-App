<script lang="ts">
	import { onMount } from 'svelte';
	import { sign_in_store } from '$lib/stores/sign-in';

	let username_input: HTMLInputElement;

	onMount(() => {
		username_input.focus();
	});
</script>

<form class="flex flex-col gap-4 py-4 px-3" on:submit|preventDefault={() => {}}>
	<input class="input" placeholder="Username" bind:this={username_input} />

	<input class="input" placeholder="Password" type="password" />

	<div class="flex flex-col gap-2">
		<button class="primary-btn shadow-a justify-center text-center" type="submit">Sign In</button>

		<button
			class="secondary-btn shadow-a justify-center text-center"
			on:click={() => sign_in_store.switch()}>Cancel</button
		>
	</div>

	<button class="text-brand-color self-start" on:click={() => sign_in_store.switch_tab('sign-up')}>
		Do not have an account?
	</button>
</form>
