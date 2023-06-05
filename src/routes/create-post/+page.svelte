<script lang="ts">
	import { goto } from '$app/navigation';
	import api from '$lib/api';
	import auth from '$lib/stores/auth';
	import pageLoader from '$lib/stores/page-loader';
	import { onMount } from 'svelte';

	let title_input: HTMLInputElement;
	let topic_input: HTMLInputElement;
	let body_input: HTMLTextAreaElement;

	let submit_clicked = false;

	$: if ($auth.signed_in === true && submit_clicked) submit();

	function handle_submit() {
		submit_clicked = true;
		if (!$auth.signed_in) auth.modal.open();
	}

	async function submit() {
		pageLoader.start();

		let data = await api.posts.create({
			title: title_input.value,
			topics: topic_input.value.split(','),
			body: body_input.value,
			access_token: $auth.user?.access_token || ''
		});

		pageLoader.stop();

		// goto('/');
	}

	onMount(() => {
		title_input?.focus();
	});
</script>

<div class="flex flex-col gap-4 w-full">
	<h1 class="font-title text-xl font-semibold">Create Post</h1>

	<div class="box p-2 sm:p-4 w-full max-w-screen-sm flex flex-col gap-4">
		<input type="text" placeholder="Title" class="input" bind:this={title_input} />

		<input
			type="text"
			placeholder="Topics: Seperate with commas"
			class="input"
			bind:this={topic_input}
		/>

		<textarea class="input resize-none h-96 sm:h-80" placeholder="Body" bind:this={body_input} />

		<div class="flex gap-4">
			<button class="primary-btn" on:click={handle_submit}> Submit </button>
			<a class="secondary-btn" type="button" href="/"> Cancel </a>
		</div>
	</div>
</div>
