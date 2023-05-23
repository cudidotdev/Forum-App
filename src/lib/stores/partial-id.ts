import { writable } from 'svelte/store';

function partial_id_store() {
	const id = writable(-1);

	return {
		grab: () => {
			let res = -1;

			id.update((n) => {
				res = n;
				return n - 1;
			});

			return res;
		}
	};
}

export const partial_id = partial_id_store();
