<script lang="ts">
	let on_sign_in = true;
	let username_input: HTMLInputElement;

	$: {
		if (on_sign_in) username_input?.focus();
	}
</script>

<div class="w-full">
	<div class="font-title flex font-bold">
		<button
			class="w-1/2 py-2.5 rounded-tl-lg border-b border-r {!on_sign_in
				? 'bg-neutral-100 border-neutral-300'
				: 'bg-white border-white'}"
			on:click={() => (on_sign_in = true)}
		>
			Sign In
		</button>

		<button
			class="w-1/2 py-2.5 rounded-tr-lg border-b border-l {on_sign_in
				? 'bg-neutral-100 border-neutral-300'
				: 'bg-white border-white'}"
			on:click={() => (on_sign_in = false)}
		>
			Sign Up
		</button>
	</div>

	<div class="py-6 px-3 flex flex-col gap-4">
		{#if on_sign_in}
			<input class="input" placeholder="Username" bind:this={username_input} />

			<input class="input" placeholder="Password" type="password" />

			<button class="primary-btn text-center justify-center">Sign In</button>

			<button class="text-brand-color text-left font-semibold" on:click={() => (on_sign_in = false)}
				>Do not have an account?</button
			>
		{:else}
			<input class="input" placeholder="Username" />
			<input class="input" placeholder="Password" />
			<input class="input" placeholder="Confirm Password" />
			<button class="primary-btn text-center justify-center">Sign Up</button>
			<button class="text-brand-color text-left font-semibold" on:click={() => (on_sign_in = true)}>
				Already have an account?
			</button>
		{/if}
	</div>
</div>
