<script lang="ts">
	import { onMount } from 'svelte';
	import { sign_in_store } from '$lib/stores/sign-in';
	import api from '$lib/api';

	let username_input: HTMLInputElement;
	let password_input: HTMLInputElement;

	let error_message: string | undefined;

	async function sign_in() {
		error_message = undefined;

		let res = await api.user.sign_in(username_input.value, password_input.value);

		if (res.success === false) {
			error_message = res.message;

			switch (res?.error?.name) {
				case 'username':
					username_input.focus();
					break;
				case 'password':
					password_input.focus();
					break;
			}
			return;
		}
	}

	onMount(() => {
		username_input.focus();
	});
</script>

<form class="flex flex-col gap-4 py-4 px-3" on:submit|preventDefault={sign_in}>
	<div class="flex flex-col gap-2">
		<input class="input" placeholder="Username" bind:this={username_input} />
		<input class="input" placeholder="Password" type="password" bind:this={password_input} />
	</div>

	<p class="{error_message ? 'text-brand-color' : 'text-transparent'} leading-none">
		{error_message}
	</p>

	<div class="flex flex-col gap-2">
		<button class="primary-btn shadow-a justify-center text-center" type="submit">Sign In</button>

		<button
			class="secondary-btn shadow-a justify-center text-center"
			on:click={() => sign_in_store.close()}>Cancel</button
		>
	</div>

	<button
		class="text-brand-color-light hover:text-brand-color self-start text-sm"
		on:click={() => sign_in_store.switch_tab('sign-up')}
	>
		Do not have an account?
	</button>
</form>
