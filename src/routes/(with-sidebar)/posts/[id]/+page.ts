import type { PageLoad } from './$types';

type post_details = {
	id: number;
	title: string;
	body: string;
	author: { first_name: string; last_name: string };
	saved: boolean;
	tags: [string, string][];
	comments: number;
};

export const load = (() => {
	const data: post_details = {
		id: 1,
		title: 'What makes a good font for bloggers?',
		author: { first_name: 'Cudi', last_name: 'Lala' },
		body: 'Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections. \
             Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections.',
		saved: false,
		comments: 16,
		tags: [
			['Making Money', 'green'],
			['Accounting', 'red'],
			['Education', 'blue']
		]
	};

	return data;
}) satisfies PageLoad;
