import { writable } from 'svelte/store';

function sign_in_store_fn() {
	const { subscribe, update } = writable({
		open: false,
		on_sign_in: true
	});

	return {
		subscribe,

		open: (on_sign_in = true) =>
			update(() => ({
				open: true,
				on_sign_in
			})),

		close: () =>
			update((b) => ({
				open: false,
				on_sign_in: b.on_sign_in
			})),

		switch: (on_sign_in = true) =>
			update((b) => ({
				open: !b.open,
				on_sign_in
			})),

		switch_tab: (t: 'sign-in' | 'sign-up') =>
			update((b) => ({
				open: b.open,
				on_sign_in: t === 'sign-in'
			}))
	};
}

export const sign_in_store = sign_in_store_fn();
