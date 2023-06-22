import api from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, parent, depends }) => {
	const data = await parent();
	const res = await api.posts.fetch_by_id({ id: +params.id, access_token: data.access_token });

	if (!res.success) {
		throw error(res.error?.status || 500, {
			message: res.error?.message || `Error fetching post with id ${params.id}`,
			status: res.error?.status || 500,
			name: res.error?.name
		});
	}

	const c_res = await api.posts.fetch_comments({ post_id: +params.id, sort: 'highest' });

	if (!c_res.success) {
		throw error(c_res.error?.status || 500, {
			message: c_res.error?.message || `Error fetching comments with post id ${params.id}`,
			status: c_res.error?.status || 500,
			name: c_res.error?.name
		});
	}

	depends('app:user');

	return { ...res.data, comments: c_res.data };
}) satisfies PageLoad;
