<script lang="ts">
	import auth from '$lib/stores/auth';

	function toggle_sign_in() {
		auth.modal.toggle();
	}
</script>

<header class="bg-white border-b border-b-neutral-300 h-12 px-4">
	<div class="flex max-w-screen-lg w-full h-full mx-auto gap-4 justify-between">
		<div class="flex justify-start items-center h-full gap-6 md:gap-8 w-full">
			<a href="/" class="font-title text-2xl font-semibold text-neutral-800">Forum</a>
		</div>

		<div class="flex flex-shrink-0 [&>*]:flex-shrink-0 gap-3 justify-end items-center h-full">
			{#if !$auth.signed_in}
				<button class="primary-btn" type="button" on:click={toggle_sign_in}>Sign in</button>
			{:else}
				<a href="/users/{$auth.user.id}">
					<span class="flex w-10 h-10 p-0.5 bg-neutral-200 rounded-full">
						<img
							src="https://api.dicebear.com/7.x/adventurer/svg?seed={$auth.user
								.username}&backgroundType=gradientLinear&backgroundColor=EC5F5F,ffcfbf"
							alt=""
							class="w-full h-full flex rounded-full"
						/>
					</span>
				</a>
			{/if}
		</div>
	</div>
</header>
