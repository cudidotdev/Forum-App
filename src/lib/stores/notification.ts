import { writable } from 'svelte/store';

function notification() {
	const { subscribe, set } = writable<
		{ item: string; type: 'success' | 'info' | 'error' } | undefined
	>();
	let tt: number;

	return {
		subscribe,
		push_notification: ({
			item,
			type,
			timeout
		}: {
			item: string;
			type: 'success' | 'info' | 'error';
			timeout?: number;
		}) => {
			clearTimeout(tt);
			set(undefined);

			tt = setTimeout(() => {
				set({ item, type });
				tt = setTimeout(() => {
					set(undefined);
				}, timeout || 5000);
			}, 100);
		},
		close: () => {
			set(undefined);
		}
	};
}

export default notification();
