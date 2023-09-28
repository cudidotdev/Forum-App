import api, { type error } from '.';

const posts = {
	create({
		title,
		hashtags,
		body,
		access_token
	}: {
		title: string;
		hashtags: string[];
		body: string;
		access_token: string;
	}): Promise<create_post_response> {
		return new Promise((resolve) => {
			fetch(api.url() + '/posts', {
				method: 'POST',
				body: JSON.stringify({ title, hashtags, body }),
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

	fetch({
		page = 1,
		limit = 20,
		sort = 'highest',
		hashtag,
		access_token
	}: {
		page?: number;
		limit?: number;
		sort?: 'highest' | 'lowest' | 'latest' | 'oldest';
		hashtag?: string;
		access_token?: string;
	}): Promise<fetch_posts_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/posts?sort=${sort}&page=${page}&limit=${limit}&hashtag=${hashtag}`, {
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
	},

	fetch_by_id({
		id,
		access_token
	}: {
		id: number;
		access_token?: string;
	}): Promise<fetch_post_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/posts/${id}`, {
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
	},

	fetch_comments({
		post_id,
		sort = 'highest'
	}: {
		post_id: number;
		sort?: 'highest' | 'lowest' | 'latest' | 'oldest';
	}): Promise<fetch_comments_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/posts/${post_id}/comments?sort=${sort}`, {
				method: 'GET'
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) =>
					resolve({ success: false, message: e?.message || 'Unknown Error', error: e })
				);
		});
	},

	save({
		post_id,
		access_token
	}: {
		post_id: number;
		access_token: string;
	}): Promise<save_post_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/posts/${post_id}/save`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${access_token}`
				}
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) =>
					resolve({ success: false, message: e?.message || 'Unknown Error', error: e })
				);
		});
	},

	unsave({
		post_id,
		access_token
	}: {
		post_id: number;
		access_token: string;
	}): Promise<save_post_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/posts/${post_id}/unsave`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${access_token}`
				}
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) =>
					resolve({ success: false, message: e?.message || 'Unknown Error', error: e })
				);
		});
	},

	add_comment({
		post_id,
		body,
		parent_id,
		access_token
	}: {
		post_id: number;
		body: string;
		parent_id?: number;
		access_token: string | undefined;
	}): Promise<create_post_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/posts/${post_id}/comments`, {
				method: 'POST',
				body: JSON.stringify({ body, comment_id: parent_id || null }),
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

	fetch_post_created_by_user({
		user_id,
		access_token
	}: {
		user_id: number;
		access_token?: string;
	}): Promise<fetch_posts_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/users/${user_id}/posts`, {
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
	},

	fetch_post_saved_by_user({
		user_id,
		access_token
	}: {
		user_id: number;
		access_token?: string;
	}): Promise<fetch_posts_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/users/${user_id}/saves`, {
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

export type post = {
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
	hashtags: [string, string][];
	created_at: string;
};

export type reply = {
	author: {
		id: number;
		name: string;
	};
	body: string;
	created_at: string;
	id: number;
	replies: reply[];
};

type create_post_response =
	| error
	| {
			success: true;
			data: {
				id: number;
			};
	  };

type fetch_posts_response =
	| error
	| {
			success: true;
			data: post[];
	  };

type fetch_post_response =
	| error
	| {
			success: true;
			data: post;
	  };

type fetch_comments_response =
	| error
	| {
			success: true;
			data: reply[];
	  };

type save_post_response = error | { success: true };

export default posts;
