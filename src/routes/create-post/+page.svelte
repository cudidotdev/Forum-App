<script lang="ts">
	import { goto } from '$app/navigation';
	import api from '$lib/api';
	import auth from '$lib/stores/auth';
	import page_loader from '$lib/stores/page-loader';
	import { onMount } from 'svelte';

	let title_input: HTMLInputElement;
	let topic_input: HTMLInputElement;
	let body_input: HTMLTextAreaElement;

	let on_submit = false;

	function start_submit() {
		if (on_submit) return;

		on_submit = true;
		page_loader.start();
		submit();
	}

	function end_submit() {
		if (!on_submit) return;
		on_submit = false;
		page_loader.stop();
	}

	async function submit() {
		let data = await api.posts.create({
			title: title_input.value,
			topics: topic_input.value.split(','),
			body: body_input.value,
			access_token: $auth.user?.access_token || ''
		});

		end_submit();
		// goto('/');
	}

	onMount(() => {
		title_input?.focus();
	});
</script>

<div class="flex flex-col gap-4 w-full">
	<h1 class="font-title text-xl font-semibold">Create Post</h1>

	<form
		class="box p-2 sm:p-4 w-full max-w-screen-sm flex flex-col gap-4"
		on:submit|preventDefault={start_submit}
	>
		<input type="text" placeholder="Title" class="input" bind:this={title_input} />

		<input
			type="text"
			placeholder="Topics: Seperate with commas"
			class="input"
			bind:this={topic_input}
		/>

		<textarea class="input resize-none h-96 sm:h-80" placeholder="Body" bind:this={body_input} />

		<div class="flex gap-4">
			<button class="primary-btn" type="submit"> Submit </button>
			<a class="secondary-btn" href="/"> Cancel </a>
		</div>
	</form>
</div>
