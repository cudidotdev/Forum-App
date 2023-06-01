import user from './user';

export const url =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8080'
		: 'api.forum.projects.cudilala.io';

const api = {
	user
};

export default api;
