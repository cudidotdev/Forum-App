import api from '$lib/api';
import type { PageLoad } from './$types';

export const load = (async ({ params, parent }) => {
	const data = await parent();
	const user_id = +params.id;

	const res = await api.posts.fetch_post_created_by_user({
		access_token: data.access_token,
		user_id
	});

	if (!res.success) {
		throw (res.error?.status || 500, { message: res.error?.message || 'Unknown Error' });
	}

	return {
		posts: res.data
	};
}) satisfies PageLoad;
