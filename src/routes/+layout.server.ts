import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	return {
		access_token: cookies.get('access_token')
	};
}) satisfies LayoutServerLoad;
