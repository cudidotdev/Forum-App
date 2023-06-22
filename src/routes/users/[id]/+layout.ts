import api from '$lib/api';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	const user_id = +params.id;
	const res = await api.users.fetch_user_by_id({ user_id });

	if (!res.success) {
		throw error(res.error?.status || 500, {
			message: res.error?.message || 'Unknown Error',
			status: res.error?.status || 500
		});
	}

	return {
		user: res.data
	};
}) satisfies LayoutLoad;
