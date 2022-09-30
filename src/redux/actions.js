export const ADD_UP_VOTE = "ADD_UP_VOTE";
export const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";
export const CHANGE_FAVOURITE = "CHANGE_FAVOURITE";
export const ADD_POST = "ADD_POST";

export const addUpVote = ({ upvotes, id, type }) => ({
	type: "ADD_UP_VOTE",
	payload: {
		upvotes: upvotes + 1,
		id,
		type,
	},
});

export const addDownVote = ({ downvotes, id, type }) => ({
	type: "ADD_DOWN_VOTE",
	payload: {
		downvotes: downvotes + 1,
		id,
		type,
	},
});

export const changeFavorite = ({ favourite, id }) => ({
	type: "CHANGE_FAVORITE",
	payload: {
		favourite: !favourite,
		id,
	},
});

export const addMeme = ({ title, author, text }) => ({
	type: "ADD_POST",
	payload: {
		title,
		author,
		upvotes: 0,
		downvotes: 0,
		favourite: false,
		text,
	},
});
