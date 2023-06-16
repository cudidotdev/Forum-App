<script lang="ts">
	import api from '$lib/api';
	import type { reply } from '$lib/api/posts';
	import { active_reply } from '$lib/stores/active-reply';
	import auth from '$lib/stores/auth';
	import { partial_id } from '$lib/stores/partial-id';
	import Comment from './comment.svelte';
	import ReplyInput from './reply-input.svelte';

	export let comments: reply[];

	export let post_id: number;

	export let parent_id: number | undefined;

	export let reply_box_visible = false;

	export function add_comment(comment_input: HTMLTextAreaElement, top = false) {
		if (comment_input.value.trim() === '') return;

		let id = partial_id.grab();

		function exec_add_comment() {
			api.posts
				.add_comment({
					body: comment_input.value.trim(),
					post_id,
					parent_id,
					access_token: $auth.user?.access_token
				})
				.then((res) => {
					if (res.success) {
						let comment = comments.find((e) => e.id === id);
						if (comment) comment.id = res.data.id;
						comments = comments;
					}
				});

			if (top)
				comments.unshift({
					id,
					body: comment_input.value.trim(),
					replies: [],
					author: { name: $auth.user?.username || '', id: $auth.user?.id || 0 },
					created_at: new Date().toDateString()
				});
			else
				comments.push({
					id,
					body: comment_input.value.trim(),
					replies: [],
					author: { name: $auth.user?.username || '', id: $auth.user?.id || 0 },
					created_at: new Date().toDateString()
				});

			comments = comments;

			comment_input.value = '';

			active_reply.deactivate();
		}

		if ($auth.signed_in) {
			exec_add_comment();
		} else {
			auth.modal.open();
			auth.events.on('sign-in', exec_add_comment);
		}
	}

	function api_add_comment(body: string, partial_id: number) {
		api.posts.add_comment({
			body,
			post_id,
			parent_id,
			access_token: $auth.user?.access_token
		});
	}
</script>

<div class="flex flex-col gap-2">
	{#each comments as comment (comment.id)}
		<Comment bind:comment {post_id} />
	{/each}
	{#if reply_box_visible}
		<ReplyInput {add_comment} />
	{/if}
</div>
