import {
	ADD_UP_VOTE,
	CHANGE_FAVOURITE,
	ADD_DOWN_VOTE,
	ADD_POST,
} from "./actions";
import { posts } from "./states";

const updatePost = (array, action, value) =>
	array.map((post) => {
		if (post.id === action.payload.id) {
			return (post = { ...post, [value]: action.payload[value] });
		}
		return post;
	});

function transferPost(fromArr, toArr, action) {
	fromArr.map((post, index) => {
		if (
			(action.payload.type === "upvotes" &&
				post.upvotes - post.downvotes > 5) ||
			(action.payload.type === "downvotes" &&
				post.upvotes - post.downvotes <= 5)
		) {
			const deleteElement = fromArr.splice(index, 1);
			toArr.push(deleteElement[0]);
		}
		return post;
	});
}

export function reducer(prevState = { posts }, action) {
	const prevHot = [...prevState.posts.hot];
	const prevRegular = [...prevState.posts.regular];

	switch (action.type) {
		case ADD_UP_VOTE: {
			const hot = updatePost(prevHot, action, "downvotes");
			const regular = updatePost(prevRegular, action, "downvotes");

			transferPost(hot, regular, action);
			return { posts: { hot, regular } };
		}
		case ADD_DOWN_VOTE: {
			const hot = updatePost(prevHot, action, "upvotes");
			const regular = updatePost(prevRegular, action, "upvotes");

			transferPost(regular, hot, action);
			return { posts: { hot, regular } };
		}
		case CHANGE_FAVOURITE: {
			const hot = updatePost(prevHot, action, "favourite");
			const regular = updatePost(prevRegular, action, "favourite");

			return { posts: { hot, regular } };
		}
		case ADD_POST: {
			const id =
				[...prevState.posts.hot, ...prevState.posts.regular].length + 1;
			const post = { id, ...action.payload };
			const hot = [prevHot];
			const regular = [prevRegular];
			return { posts: { hot, regular } };
		}
		default:
			return prevState;
	}
}
