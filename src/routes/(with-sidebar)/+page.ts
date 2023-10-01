import api from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent, depends, url }) => {
	const data = await parent();
	const sort_str = url.searchParams.get('sort')?.toString() || '';
	const hashtag = url.searchParams.get('hashtag')?.toString() || '';
	const page = 1;
	const limit = 20;

	const sort = (
		['highest', 'lowest', 'latest', 'oldest']?.includes(sort_str) ? sort_str : 'highest'
	) as 'highest' | 'lowest' | 'latest' | 'oldest';

	const res = await api.posts.fetch({
		sort,
		hashtag,
		access_token: data.access_token,
		page,
		limit
	});

	depends('app:user');

	if (!res.success)
		throw error(res.error?.status || 500, {
			name: res.error?.name,
			message: res.error?.message || 'Unknown Error',
			status: res.error?.status || 500
		});
	else return { posts: res.data, fetchParams: { page, limit } };
}) satisfies PageLoad;
