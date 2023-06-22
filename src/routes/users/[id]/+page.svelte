<script lang="ts">
	import Posts from '../../posts.svelte';
	import type { PageData } from './$types';
	import auth from '$lib/stores/auth';

	export let data: PageData;
</script>

<div class="flex flex-col gap-2 md:gap-4 w-full max-w-screen-lg mx-auto">
	<div class="w-full box flex flex-col gap-8 p-4 md:p-8 items-stretch">
		<div class="flex gap-8 items-stretch">
			<div class="flex flex-col gap-4">
				<span
					class="w-28 h-28 md:w-52 md:h-52 flex rounded-full bg-neutral-100 border grow-0 shrink-0 border-neutral-300"
				/>

				<div class="flex md:hidden">
					<span class="title font-semibold text-xl text-link-blue">@{data.user.username}</span>
				</div>
			</div>

			<div class="hidden md:flex items-center">
				<span class="title font-semibold text-xl text-link-blue">@{data.user.username}</span>
			</div>

			{#if $auth.user && $auth.user.id === data.user.id}
				<div class="grow flex justify-end items-start py-4 md:py-8 md:px-8">
					<button class="primary-btn" on:click={auth.sign_out}>Sign Out</button>
				</div>
			{/if}
		</div>
	</div>

	<div class="w-full flex flex-col gap-2">
		<div
			class="box flex justify-between md:justify-start gap-8 px-4 md:px-8 py-2 w-full font-title font-semibold text-lg"
		>
			<a class="text-brand-color">Posts</a>
			<a>Saved</a>
			<a>Settings</a>
		</div>
	</div>

	<Posts posts={data.posts} />
</div>
