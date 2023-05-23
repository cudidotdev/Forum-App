export type comment = {
	id: number;
	body: string;
	author: { first_name: string; last_name: string };
	replies: comment[];
};

export type post_details = {
	id: number;
	title: string;
	body: string;
	author: { first_name: string; last_name: string };
	saved: boolean;
	tags: [string, string][];
	comments: comment[];
};
