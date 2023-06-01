<script lang="ts">
	import { onMount } from 'svelte';
	import { sign_in_store } from '$lib/stores/sign-in';

	let username_input: HTMLInputElement;

	onMount(() => {
		username_input.focus();
	});
</script>

<form class="flex flex-col gap-4 px-3 py-4" on:submit|preventDefault={() => {}}>
	<input class="input" placeholder="Username" bind:this={username_input} />

	<input class="input" placeholder="Password" type="password" />

	<input class="input" placeholder="Confirm Password" type="password" />

	<div class="flex flex-col gap-2">
		<button class="primary-btn shadow-a justify-center text-center" type="submit">Sign Up</button>

		<button
			class="secondary-btn shadow-a justify-center text-center"
			on:click={() => sign_in_store.switch()}>Cancel</button
		>
	</div>

	<button class="text-brand-color self-start" on:click={() => sign_in_store.switch_tab('sign-in')}>
		Already have an account?
	</button>
</form>
