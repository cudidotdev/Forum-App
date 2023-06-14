import api from '.';

const posts = {
	async create({
		title,
		topics,
		body,
		access_token
	}: {
		title: string;
		topics: string[];
		body: string;
		access_token: string;
	}): Promise<create_post_response> {
		return new Promise((resolve) => {
			fetch(api.url() + '/posts', {
				method: 'POST',
				body: JSON.stringify({ title, topics, body }),
				headers: {
					Authorization: `Bearer ${access_token}`,
					'Content-Type': 'application/json'
				}
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) =>
					resolve({ success: false, message: e?.message || 'Unknown Error', error: e })
				);
		});
	},

	async fetch({
		page = 1,
		limit = 20,
		sort = 'highest',
		access_token
	}: {
		page?: number;
		limit?: number;
		sort?: 'highest' | 'lowest' | 'latest' | 'oldest';
		access_token?: string;
	}): Promise<fetch_posts_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/posts?sort=${sort}&page=${page}&limit=${limit}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${access_token}`,
					'Content-Type': 'application/json'
				}
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) =>
					resolve({ success: false, message: e?.message || 'Unknown Error', error: e })
				);
		});
	}
};

type create_post_response =
	| {
			success: false;
			message?: string;
			error?: { name?: string; message?: string };
	  }
	| {
			success: true;
			data: {
				id: number;
			};
	  };

type fetch_posts_response =
	| {
			success: false;
			message?: string;
			error?: { name?: string; message?: string };
	  }
	| {
			success: true;
			data: {
				id: number;
				author: {
					name: string;
					id: number;
				};
				body: string;
				comments: number;
				saved: boolean;
				saves: number;
				title: string;
				topics: [string, string][];
			}[];
	  };

export default posts;
