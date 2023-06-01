<script lang="ts">
	import { sign_in_store } from '$lib/stores/sign-in';
	import MobilePopUp from '../mobile-pop-up.svelte';
	import SignInForm from './sign-in-form.svelte';
	import SignUpForm from './sign-up-form.svelte';
</script>

<div class="hidden fixed top-0 px-4 w-screen {$sign_in_store.open ? 'sm:block' : ''}">
	<div class="relative max-w-screen-lg mx-auto">
		<div class="absolute w-80 right-0 top-1 z-20 box shadow-b">
			<div class="font-title flex font-bold">
				<button
					class="w-1/2 py-2.5 rounded-tl-lg border-b border-r {!$sign_in_store.on_sign_in
						? 'bg-neutral-100 border-neutral-300'
						: 'bg-white border-white'}"
					on:click={() => sign_in_store.switch_tab('sign-in')}
				>
					Sign In
				</button>

				<button
					class="w-1/2 py-2.5 rounded-tr-lg border-b border-l {$sign_in_store.on_sign_in
						? 'bg-neutral-100 border-neutral-300'
						: 'bg-white border-white'}"
					on:click={() => sign_in_store.switch_tab('sign-up')}
				>
					Sign Up
				</button>
			</div>

			{#if $sign_in_store.open}
				{#if $sign_in_store.on_sign_in}
					<SignInForm />
				{:else}
					<SignUpForm />
				{/if}
			{/if}
		</div>
	</div>
</div>

<MobilePopUp active={$sign_in_store.open} close_popup={sign_in_store.close}>
	<div class="w-full">
		<div class="font-title flex font-bold">
			<button
				class="w-1/2 py-2.5 rounded-tl-lg border-b border-r {!$sign_in_store.on_sign_in
					? 'bg-neutral-100 border-neutral-300'
					: 'bg-white border-white'}"
				on:click={() => sign_in_store.switch_tab('sign-in')}
			>
				Sign In
			</button>

			<button
				class="w-1/2 py-2.5 rounded-tr-lg border-b border-l {$sign_in_store.on_sign_in
					? 'bg-neutral-100 border-neutral-300'
					: 'bg-white border-white'}"
				on:click={() => sign_in_store.switch_tab('sign-up')}
			>
				Sign Up
			</button>
		</div>

		{#if $sign_in_store.open}
			{#if $sign_in_store.on_sign_in}
				<SignInForm />
			{:else}
				<SignUpForm />
			{/if}
		{/if}
	</div>
</MobilePopUp>
