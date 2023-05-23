type reply = {
	replies: reply[];
};

export function count_replies(comments: reply[]) {
	let count = 0;

	for (let i = 0; i < comments.length; i++) {
		count += 1;
		count += count_replies(comments[i].replies);
	}

	return count;
}
