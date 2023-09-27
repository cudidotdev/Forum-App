<script lang="ts">
	import type { PageData } from './$types';
	import auth from '$lib/stores/auth';

	export let data: PageData;
</script>

<div class="flex flex-col gap-2 md:gap-4 w-full max-w-screen-lg mx-auto">
	<div class="w-full box flex flex-col gap-8 p-4 md:p-8 items-stretch">
		<div class="flex gap-8 items-stretch">
			<div class="flex flex-col gap-4">
				<span
					class="w-28 h-28 md:w-52 md:h-52 p-1 flex rounded-full bg-neutral-100 border grow-0 shrink-0 border-neutral-300"
				>
					<img
						src="https://api.dicebear.com/7.x/adventurer/svg?seed={data.user
							.username}&backgroundType=gradientLinear&backgroundColor=EC5F5F,ffcfbf"
						alt=""
						class="w-full h-full flex rounded-full"
					/>
				</span>

				<div class="flex md:hidden">
					<a href="/users/{data.user.id}" class="title font-semibold text-xl text-link-blue">
						@{data.user.username}
					</a>
				</div>
			</div>

			<div class="hidden md:flex items-center">
				<a href="/users/{data.user.id}" class="title font-semibold text-xl text-link-blue">
					@{data.user.username}
				</a>
			</div>

			{#if $auth.user && $auth.user.id === data.user.id}
				<div class="grow flex justify-end items-start py-4 md:py-8 md:px-8">
					<button class="primary-btn" on:click={auth.sign_out}>Sign Out</button>
				</div>
			{/if}
		</div>
	</div>

	<slot />
</div>
