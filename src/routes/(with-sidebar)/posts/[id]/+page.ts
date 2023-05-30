import type { PageLoad } from './$types';
import type { post_details } from './types';

export const load = (({ fetch }) => {
	try {
		fetch('http://127.0.0.1:8080', {
			method: 'PUT',
			headers: { Authorization: 'Bearer asdfalsdfkj' }
		});
	} catch (error) {
		/**/
	}

	const data: post_details = {
		id: 1,
		title: 'What makes a good font for bloggers?',
		author: { first_name: 'Cudi', last_name: 'Lala' },
		body: 'Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections. \
             Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections.',
		saved: false,
		tags: [
			['Making Money', 'green'],
			['Accounting', 'red'],
			['Education', 'blue']
		],
		comments: [
			{
				id: 1,
				body: 'Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections. \
             Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections.',
				author: {
					first_name: 'Cudi',
					last_name: 'Lala'
				},
				replies: [
					{
						id: 3,
						body: 'Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections. \
             Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections.',
						author: {
							first_name: 'Cudi',
							last_name: 'Lala'
						},
						replies: []
					}
				]
			},
			{
				id: 2,
				body: 'Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections. \
             Designed and coded my first web project in 1998. \
             Now I am heavily involved in UX Design, Webflow, Blockchain Technology, and NFT Collections.',
				author: {
					first_name: 'Cudi',
					last_name: 'Lala'
				},
				replies: []
			}
		]
	};

	return data;
}) satisfies PageLoad;
