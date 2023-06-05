<script lang="ts">
	import { onMount } from 'svelte';
	import auth from '$lib/stores/auth';
	import api from '$lib/api';
	import page_loader from '$lib/stores/page-loader';

	let username_input: HTMLInputElement;
	let password_input: HTMLInputElement;

	let error_message: string | undefined;

	let sign_in_clicked = false;

	$: {
		if (sign_in_clicked) {
			page_loader.start();
			sign_in();
		} else page_loader.stop();
	}

	async function sign_in() {
		error_message = undefined;

		let res = await api.auth.sign_in(username_input.value, password_input.value);

		sign_in_clicked = false;

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
			}

			return;
		}

		auth.modal.close();
	}

	onMount(() => {
		username_input.focus();
	});
</script>

<form
	class="flex flex-col gap-4 py-4 px-3"
	on:submit|preventDefault={() => (sign_in_clicked = true)}
>
	<div class="flex flex-col gap-2">
		<input class="input" placeholder="Username" bind:this={username_input} />
		<input class="input" placeholder="Password" type="password" bind:this={password_input} />
	</div>

	<p class="{error_message ? 'text-brand-color' : 'text-transparent'} leading-none">
		{error_message}
	</p>

	<div class="flex flex-col gap-2">
		<button class="primary-btn shadow-a justify-center text-center" type="submit">
			{!sign_in_clicked ? 'Sign In' : 'Signing in...'}
		</button>

		<button
			class="secondary-btn shadow-a justify-center text-center"
			type="button"
			on:click={() => auth.modal.close()}>Cancel</button
		>
	</div>

	<button
		type="button"
		class="text-brand-color-light hover:text-brand-color self-start text-sm"
		on:click={() => auth.modal.switch_tab('sign-up')}
	>
		Do not have an account?
	</button>
</form>
