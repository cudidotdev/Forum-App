import { writable } from 'svelte/store';

function create_active_reply() {
	const { subscribe, update } = writable<number | undefined>();

	return {
		subscribe,
		activate: (id: number) => update((n) => (n === id ? undefined : id))
	};
}

export const active_reply = create_active_reply();
