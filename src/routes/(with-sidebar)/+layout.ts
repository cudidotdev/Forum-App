import api from '$lib/api';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	const res = await api.hashtags.fetch_trending();
	console.log(res);

	if (!res.success) {
		throw error(res.error?.status || 500, {
			message: res.error?.message || 'Unknown Error',
			status: res.error?.status || 500
		});
	} else return { hashtags: res.data };
}) satisfies LayoutLoad;
