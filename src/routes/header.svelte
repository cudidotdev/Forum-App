<script lang="ts">
	import PrimaryButton from '$lib/components/primary-button.svelte';
	import NotificationIcon from '$lib/icons/notification-icon.svelte';
	import Search from './search.svelte';
</script>

<header class="bg-white border-b border-b-neutral-200 h-12 px-2 sm:px-4">
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

			<button class="primary-btn" type="button">Sign in</button>
		</div>
	</div>
</header>
