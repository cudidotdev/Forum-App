import { goto } from '$app/navigation';

export function filterByHashtag(hashtag: string) {
	const search = new URLSearchParams(window.location.search);
	search.set('hashtag', hashtag);

	const url = new URL(window.location.href);
	url.search = search.toString();
	url.pathname = '/';

	goto(url);
}

export function removeHashtag() {
	const search = new URLSearchParams(window.location.search);
	search.delete('hashtag');

	const url = new URL(window.location.href);
	url.search = search.toString();

	goto(url);
}
