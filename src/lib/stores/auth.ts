import { writable } from 'svelte/store';
import Cookies from 'js-cookie';
import { EventEmitter, type Listener } from 'events';

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

	const events = new EventEmitter();

	async function emit_user_change() {
		events.emit('user-change');
	}

	async function emit_sign_in() {
		events.emit('sign-in');
	}

	async function emit_sign_out() {
		events.emit('sign-out');
	}

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

			update((p) => {
				if (p.user?.id != id) emit_user_change();

				return {
					...p,
					signed_in: true,
					user: { access_token, id, username }
				};
			});

			emit_sign_in();
		},

		sign_out: () => {
			Cookies.remove('access-token');

			update((p) => {
				if (p.user?.id != null) emit_user_change();

				return {
					...p,
					signed_in: false,
					user: null
				};
			});

			emit_sign_out();
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
		},

		events: {
			on: (event: 'sign-in' | 'sign-out' | 'user-change', listener: Listener) => {
				events.on(event, listener);
			},

			off: (event: 'sign-in' | 'sign-out' | 'user-change', listener: Listener) => {
				events.off(event, listener);
			}
		}
	};
}

export default auth();
