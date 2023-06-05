import { writable } from 'svelte/store';

function page_loader() {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		start() {
			set(true);
		},
		stop() {
			set(false);
		}
	};
}

export default page_loader();
