import { writable } from 'svelte/store';

function auth() {
	const { subscribe, update } = writable({
		user: null,
		modal: {
			open: false,
			on_sign_in: true
		}
	});

	return {
		subscribe,

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
