/* eslint-disable @typescript-eslint/no-explicit-any */
import { url } from '.';

const auth = {
	sign_in: (username: string, password: string): Promise<auth_response> => {
		return new Promise((resolve) => {
			fetch(url + '/auth/sign-in', {
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password }),
				method: 'POST'
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) => resolve({ success: false, message: e?.message || 'Unknown error' }));
		});
	},

	sign_up: (
		username: string,
		password: string,
		confirm_password: string
	): Promise<auth_response> => {
		return new Promise((resolve) => {
			fetch(url + '/auth/sign-up', {
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password, confirm_password }),
				method: 'POST'
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) => resolve({ success: false, message: e?.message || 'Unknown error' }));
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
