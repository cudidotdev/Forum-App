import api from '$lib/api';
import type { PageLoad } from './$types';

export const load = (async ({ data, depends, parent }) => {
	const res = await api.posts.fetch({ access_token: data.access_token });

	depends('home:posts');

	if (!res.success) return { posts: [] };
	else return { posts: res.data };
}) satisfies PageLoad;
