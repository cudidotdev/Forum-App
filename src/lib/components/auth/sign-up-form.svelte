<script lang="ts">
	import { onMount } from 'svelte';
	import auth from '$lib/stores/auth';
	import api from '$lib/api';

	let username_input: HTMLInputElement;
	let password_input: HTMLInputElement;
	let confirm_password_input: HTMLInputElement;

	let error_message: string | undefined;

	async function sign_up() {
		error_message = undefined;

		let res = await api.auth.sign_up(
			username_input.value,
			password_input.value,
			confirm_password_input.value
		);

		if (res.success === false) {
			error_message = res.message;

			switch (res?.error?.name) {
				case 'username':
					username_input.select();
					username_input.focus();
					break;
				case 'password':
					password_input.select();
					password_input.focus();
					break;
				case 'confirm_password':
					confirm_password_input.select();
					confirm_password_input.focus();
					break;
			}
			return;
		}

		auth.modal.close();
	}

	onMount(() => {
		username_input.focus();
	});
</script>

<form class="flex flex-col gap-4 px-3 py-4" on:submit|preventDefault={sign_up}>
	<div class="flex flex-col gap-2">
		<input class="input" placeholder="Username" bind:this={username_input} />
		<input class="input" placeholder="Password" type="password" bind:this={password_input} />
		<input
			class="input"
			placeholder="Confirm Password"
			type="password"
			bind:this={confirm_password_input}
		/>
	</div>

	<p class="{error_message ? 'text-brand-color' : 'text-transparent'} leading-none">
		{error_message}
	</p>

	<div class="flex flex-col gap-2">
		<button class="primary-btn shadow-a justify-center text-center" type="submit">Sign Up</button>

		<button
			class="secondary-btn shadow-a justify-center text-center"
			on:click={() => auth.modal.close()}>Cancel</button
		>
	</div>

	<button
		class="text-brand-color-light hover:text-brand-color self-start text-sm"
		on:click={() => auth.modal.switch_tab('sign-in')}
	>
		Already have an account?
	</button>
</form>
