import auth from './auth';
import { browser, building, dev } from '$app/environment';
import posts from './posts';
import users from './users';
import hashtags from './hashtags';

import { PUBLIC_DEV_API_URL, PUBLIC_PROD_API_URL } from '$env/static/public';

const api = {
	url: () => (!browser || building || dev ? PUBLIC_DEV_API_URL : PUBLIC_PROD_API_URL),
	auth,
	posts,
	users,
	hashtags
};

export type error = {
	success: false;
	message?: string;
	error?: { name?: string; message?: string; status?: number };
};

export default api;
