import api from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, data, depends }) => {
	const res = await api.posts.fetch_by_id({ id: +params.id, access_token: data.access_token });

	if (!res.success) {
		throw error(404, {
			message: res.error.message || `Error fetching post with id ${params.id}`
		});
	}

	const c_res = await api.posts.fetch_comments({ post_id: +params.id, sort: 'highest' });

	if (!c_res.success) {
		throw error(500, {
			message: c_res.error.message || `Error fetching comments with post id ${params.id}`
		});
	}

	depends('app:user');

	return { ...res.data, comments: c_res.data };
}) satisfies PageLoad;
