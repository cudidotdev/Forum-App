import auth from './auth';
import { browser, building, dev } from '$app/environment';
import posts from './posts';

const api = {
	url: () => (!browser || building || dev ? 'http://127.0.0.1:8080' : 'http://157.245.29.181:8080'),
	auth,
	posts
};

export default api;
