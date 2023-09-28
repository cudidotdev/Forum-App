import auth from './auth';
import { browser, building, dev } from '$app/environment';
import posts from './posts';
import users from './users';
import hashtags from './hashtags';

const api = {
	url: () =>
		!browser || building || dev ? 'http://127.0.0.1:8080' : 'https://api.forum.projects.cudi.dev',
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
