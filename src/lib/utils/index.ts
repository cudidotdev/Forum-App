type reply = {
	id: number;
	replies: reply[];
	[key: string]: unknown;
};

export function count_replies(comments: reply[]) {
	let count = 0;

	for (let i = 0; i < comments.length; i++) {
		count += 1;
		count += count_replies(comments[i].replies);
	}

	return count;
}

export function find_parent_comment(comments: reply[], id?: number): reply | undefined {
	if (!id) return;

	for (let i = 0; i < comments.length; i++) {
		if (comments[i].id === id) return comments[i];

		const reply = find_parent_comment(comments[i].replies, id);

		if (reply) return reply;
	}
}
