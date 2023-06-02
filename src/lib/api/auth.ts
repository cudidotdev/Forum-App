/* eslint-disable @typescript-eslint/no-explicit-any */
import auth_store from '$lib/stores/auth';
import Cookies from 'js-cookie';
import api from '.';

const auth = {
	sign_in: (username: string, password: string): Promise<auth_response> => {
		return new Promise((resolve) => {
			fetch(api.url() + '/auth/sign-in', {
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password }),
				method: 'POST'
			})
				.then((r) => r.json())
				.then((r) => {
					if (r.success) auth_store.sign_in(r.data);
					resolve(r);
				})
				.catch((e) => resolve({ success: false, message: e?.message || 'Unknown error' }));
		});
	},

	sign_up: (
		username: string,
		password: string,
		confirm_password: string
	): Promise<auth_response> => {
		return new Promise((resolve) => {
			fetch(api.url() + '/auth/sign-up', {
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password, confirm_password }),
				method: 'POST'
			})
				.then((r) => r.json())
				.then((r) => {
					if (r.success) auth_store.sign_in(r.data);
					resolve(r);
				})
				.catch((e) => resolve({ success: false, message: e?.message || 'Unknown error' }));
		});
	},

	sign_out: auth_store.sign_out,

	verify_auth: () => {
		const access_token = Cookies.get('access_token');

		if (!access_token) return auth.sign_out();

		fetch(api.url() + '/auth', {
			method: 'GET',
			headers: { Authorization: `bearer ${access_token}` }
		})
			.then((r) => r.json())
			.then((r) => {
				if (r.success) auth_store.sign_in({ ...r.data, access_token });
				else auth.sign_out();
			})
			.catch(auth.sign_out);
	},

	server_verify_auth: (access_token: string) => {
		return new Promise((resolve) => {
			fetch(api.url() + '/auth', {
				method: 'GET',
				headers: { Authorization: `Bearer ${access_token}` }
			})
				.then((r) => r.json())
				.then((r) => {
					if (r.success) auth_store.sign_in({ ...r.data, access_token });
					else auth.sign_out();
					resolve({});
				})
				.catch(() => {
					resolve({});
					auth.sign_out();
				});
		});
	}
};

type auth_response =
	| {
			success: false;
			message?: string;
			error?: { name?: string; message?: string };
	  }
	| {
			success: true;
			data: {
				access_token: string;
			};
	  };

export default auth;
