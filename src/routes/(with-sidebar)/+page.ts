import api from '$lib/api';
import type { PageLoad } from './$types';

export const load = (async ({ parent, depends, url }) => {
	const data = await parent();
	const sort_str = url.searchParams.get('sort')?.toString() || '';

	const sort = (
		['highest', 'lowest', 'latest', 'oldest']?.includes(sort_str) ? sort_str : 'highest'
	) as 'highest' | 'lowest' | 'latest' | 'oldest';

	const res = await api.posts.fetch({ sort, access_token: data.access_token });

	depends('app:user');

	if (!res.success) return { posts: [] };
	else return { posts: res.data };
}) satisfies PageLoad;
