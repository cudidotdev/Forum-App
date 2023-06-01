import { tick } from 'svelte';

type reply = {
	replies: reply[];
};

export function count_replies(comments: reply[]) {
	let count = 0;

	for (let i = 0; i < comments.length; i++) {
		count += 1;
		count += count_replies(comments[i].replies);
	}

	return count;
}
export async function stop_bg_scroll(node: Element | undefined, when: boolean) {
	if (typeof window === 'undefined' || typeof node === 'undefined') return;

	await tick();

	const style = window.getComputedStyle(node);

	if (style.visibility === 'visible' && style.display !== 'none' && when) {
		document.body.style.height = '100vh';
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.height = 'auto';
		document.body.style.overflow = 'auto';
	}
}
