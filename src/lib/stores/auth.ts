import { writable } from 'svelte/store';
import Cookies from 'js-cookie';

function auth() {
	const { subscribe, update } = writable<
		| {
				signed_in: false;
				user: null;
				modal: { open: boolean; on_sign_in: boolean };
		  }
		| {
				signed_in: true;
				user: { access_token: string; id: number; username: string };
				modal: { open: boolean; on_sign_in: boolean };
		  }
	>({
		signed_in: false,
		user: null,
		modal: {
			open: false,
			on_sign_in: true
		}
	});

	return {
		subscribe,

		sign_in: ({
			id,
			username,
			access_token
		}: {
			id: number;
			username: string;
			access_token: string;
		}) => {
			if (
				typeof access_token !== 'string' ||
				typeof id !== 'number' ||
				typeof username !== 'string'
			)
				throw { message: 'Unknown data recieved' };

			Cookies.set('access_token', access_token, { expires: 365, path: '/' });

			update((p) => ({
				...p,
				signed_in: true,
				user: { access_token, id, username }
			}));
		},

		sign_out: () => {
			Cookies.remove('access-token');

			update((p) => ({
				...p,
				signed_in: false,
				user: null
			}));
		},

		modal: {
			open: (on_sign_in = true) =>
				update((p) => ({
					...p,
					modal: {
						open: true,
						on_sign_in
					}
				})),

			close: () =>
				update((p) => ({
					...p,
					modal: {
						open: false,
						on_sign_in: p.modal.on_sign_in
					}
				})),

			toggle: (on_sign_in = true) =>
				update((p) => ({
					...p,
					modal: {
						open: !p.modal.open,
						on_sign_in
					}
				})),

			switch_tab: (t: 'sign-in' | 'sign-up') =>
				update((p) => ({
					...p,
					modal: {
						open: p.modal.open,
						on_sign_in: t === 'sign-in'
					}
				}))
		}
	};
}

export default auth();
