/* eslint-disable @typescript-eslint/no-explicit-any */
import { url } from '.';

const user = {
	sign_in: (username: string, password: string): Promise<sign_in_response> => {
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
	): Promise<sign_up_response> => {
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

type sign_in_response =
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

type sign_up_response =
	| {
			success: false;
			message?: string;
			error?: { name?: string; message?: string };
	  }
	| {
			success: true;
			data: {
				id: number;
			};
	  };

export default user;
