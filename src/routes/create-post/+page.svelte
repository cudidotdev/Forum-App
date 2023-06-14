<script lang="ts">
	import { goto } from '$app/navigation';
	import api from '$lib/api';
	import auth from '$lib/stores/auth';
	import page_loader from '$lib/stores/page-loader';
	import { onMount } from 'svelte';
	import notification from '$lib/stores/notification';
	import { onDestroy } from 'svelte';

	let title_input: HTMLInputElement;
	let topic_input: HTMLInputElement;
	let body_input: HTMLTextAreaElement;

	let submitting = false;
	$: submitting ? page_loader.start() : page_loader.stop();

	function handle_submit() {
		if (submitting) return;

		if (!$auth.signed_in) {
			auth.modal.open();
			auth.events.on('sign-in', submit);
			return;
		}

		submit();
	}

	async function submit() {
		submitting = true;

		let data = await api.posts.create({
			title: title_input.value,
			topics: topic_input.value.split(','),
			body: body_input.value,
			access_token: $auth.user?.access_token || ''
		});

		submitting = false;
		close_event_listeners();

		if (!data.success) {
			notification.push_notification({ item: data.message || 'Unknown error', type: 'error' });

			switch (data.error?.name) {
				case 'title':
					title_input.select();
					title_input.focus();
					break;
				case 'topics':
					topic_input.select();
					topic_input.focus();
					break;
				case 'body':
					body_input.select();
					body_input.focus();
					break;
			}
		} else {
			notification.close();
			goto('/');
		}
	}

	function close_event_listeners() {
		auth.events.off('sign-in', submit);
	}

	onMount(() => {
		title_input?.focus();
	});

	onDestroy(() => {
		close_event_listeners();
	});
</script>

<div class="flex flex-col gap-4 w-full">
	<h1 class="font-title text-xl font-semibold">Create Post</h1>

	<form
		class="box p-2 sm:p-4 w-full max-w-screen-sm flex flex-col gap-4"
		on:submit|preventDefault={handle_submit}
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
