<script lang="ts">
	import { onMount } from 'svelte';
	import { sign_in_store } from '$lib/stores/sign-in';

	let username_input: HTMLInputElement;
	let error_message: string | undefined;

	onMount(() => {
		username_input.focus();
	});
</script>

<form class="flex flex-col gap-4 px-3 py-4" on:submit|preventDefault={() => {}}>
	<div class="flex flex-col gap-2">
		<input class="input" placeholder="Username" bind:this={username_input} />
		<input class="input" placeholder="Password" type="password" />
		<input class="input" placeholder="Confirm Password" type="password" />
	</div>

	<p class="{error_message ? 'text-brand-color' : 'text-transparent'} leading-none">
		{error_message}
	</p>

	<div class="flex flex-col gap-2">
		<button class="primary-btn shadow-a justify-center text-center" type="submit">Sign Up</button>

		<button
			class="secondary-btn shadow-a justify-center text-center"
			on:click={() => sign_in_store.close()}>Cancel</button
		>
	</div>

	<button
		class="text-brand-color-light hover:text-brand-color self-start text-sm"
		on:click={() => sign_in_store.switch_tab('sign-in')}
	>
		Already have an account?
	</button>
</form>
