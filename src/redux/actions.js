export const ADD_UP_VOTE = "ADD_UP_VOTE";
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

export const changeFavourite = ({ favourite, id }) => ({
	type: "CHANGE_FAVOURITE",
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
