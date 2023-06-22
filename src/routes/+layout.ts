import api from '$lib/api';
import type { LayoutLoad } from './$types';

export const load = (async ({ data }) => {
	await api.auth.server_verify_auth(data.access_token || '');
	return {
		access_token: data.access_token
	};
}) satisfies LayoutLoad;
