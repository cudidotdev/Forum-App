import { goto } from '$app/navigation';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

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

export function calcTimeDiff(time: string) {
	//incase of calculating postgres time without Z and js iso_string with Z
	if (!time.endsWith('Z')) time = time + 'Z';

	const milisecDiff = Date.now() - new Date(time).getTime();
	const secsDiff = Math.floor(milisecDiff / 1000);
	const minsDiff = Math.floor(milisecDiff / (1000 * 60));
	const hrsDiff = Math.floor(milisecDiff / (1000 * 60 * 60));
	const daysDiff = Math.floor(milisecDiff / (1000 * 60 * 60 * 24));
	const weeksDiff = Math.floor(milisecDiff / (1000 * 60 * 60 * 24 * 7));

	if (secsDiff == 1) return '1 sec';
	if (secsDiff < 60) return `${secsDiff} secs`;
	if (minsDiff == 1) return '1 min';
	if (minsDiff < 60) return `${minsDiff} mins`;
	if (hrsDiff == 1) return '1 hour';
	if (hrsDiff < 24) return `${hrsDiff} hours`;
	if (daysDiff == 1) return '1 day';
	if (daysDiff < 60) return `${daysDiff} days`;
	if (weeksDiff == 1) return '1 week';
	return `${weeksDiff} weeks`;
}

export function createSvgFromSeed({ seed }: { seed: string }) {
	const avatar = createAvatar(adventurer, {
		seed,
		backgroundType: ['gradientLinear'],
		backgroundColor: ['EC5F5F', 'ffcfbf']
	});

	return avatar.toDataUriSync();
}

export function genericAvatarSvg() {
	const avatar = createAvatar(adventurer, {
		seed: 'seed',
		backgroundType: ['gradientLinear'],
		backgroundColor: ['bdbdbd', 'efefef'],
		eyes: ['variant01'],
		hairColor: ['5e5e5e'],
		mouth: ['variant09'],
		skinColor: ['ffffff']
	});

	return avatar.toDataUriSync();
}
