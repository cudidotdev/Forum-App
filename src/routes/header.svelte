<script lang="ts">
	import MobilePopUp from '$lib/components/mobile-pop-up.svelte';
	import NotificationIcon from '$lib/icons/notification-icon.svelte';
	import Search from './search.svelte';
	import SignIn from './sign-in.svelte';

	let sign_in_active = false;
	let sign_in_active_mobile = false;

	function toggle_sign_in() {
		sign_in_active = !sign_in_active;
	}

	function toggle_sign_in_mobile() {
		sign_in_active_mobile = !sign_in_active_mobile;
	}
</script>

<header class="bg-white border-b border-b-neutral-300 h-12 px-2 sm:px-4">
	<div class="flex max-w-screen-lg w-full h-full mx-auto gap-6 justify-between">
		<div class="flex justify-start items-center h-full gap-6 md:gap-8 w-full">
			<a href="/" class="font-title text-2xl font-semibold text-neutral-800">Forum</a>

			<Search mobile={false} />
		</div>

		<div class="flex flex-shrink-0 [&>*]:flex-shrink-0 gap-3 justify-end items-center h-full">
			<Search mobile={true} />

			<button class="flex w-8 h-8">
				<NotificationIcon />
			</button>

			<div class="relative">
				<button class="primary-btn hidden sm:flex" type="button" on:click={toggle_sign_in}>
					Sign in
				</button>
				<button class="primary-btn flex sm:hidden" type="button" on:click={toggle_sign_in_mobile}>
					Sign in
				</button>

				<div
					class="box shadow-b absolute top-[calc(100%+0.25rem)] right-0 bg-white w-80 {sign_in_active
						? 'hidden sm:flex'
						: 'hidden'}"
				>
					<SignIn />
				</div>
			</div>
		</div>
	</div>
</header>

<div class="sm:hidden">
	<MobilePopUp active={sign_in_active_mobile} close_popup={() => (sign_in_active_mobile = false)}>
		<SignIn />
	</MobilePopUp>
</div>
