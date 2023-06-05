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
export default posts;
