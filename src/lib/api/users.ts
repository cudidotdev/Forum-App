import api, { type error } from '.';

const users = {
	fetch_user_by_id({
		user_id
	}: {
		user_id: number;
		access_token?: string;
	}): Promise<fetch_user_response> {
		return new Promise((resolve) => {
			fetch(api.url() + `/users/${user_id}`, {
				method: 'GET'
			})
				.then((r) => r.json())
				.then(resolve)
				.catch((e) =>
					resolve({ success: false, message: e?.message || 'Unknown Error', error: e })
				);
		});
	}
};

export default users;

type fetch_user_response =
	| error
	| {
			success: true;
			data: {
				id: number;
				username: string;
			};
	  };
