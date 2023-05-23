import { writable } from 'svelte/store';

function create_active_reply() {
	const { subscribe, update, set } = writable<number | undefined>();

	return {
		subscribe,
		activate: (id: number) => update((n) => (n === id ? undefined : id)),
		deactivate: () => set(undefined)
	};
}

export const active_reply = create_active_reply();
