import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, depends }) => {
	depends('home:posts');

	return {
		access_token: cookies.get('access_token')
	};
}) satisfies PageServerLoad;
