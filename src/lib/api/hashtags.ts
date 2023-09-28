import type { error } from '.';
import api from '.';

const hashtags = {
	fetch_trending(): Promise<fetch_hashtag_response> {
		return new Promise((resolve) => {
			fetch(api.url() + '/hashtags/trending', {
				method: 'GET'
			})
				.then((r) => r.json())
				.then((r) => {
					resolve(r);
				})
				.catch((e) => resolve({ success: false, message: e?.message || 'Unknown error' }));
		});
	}
};

type fetch_hashtag_response =
	| error
	| {
			success: true;
			data: [string, string][];
	  };

export default hashtags;
