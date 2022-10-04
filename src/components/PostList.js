import React from "react";
import { useEffect } from "react";

import { List } from "@mui/material";

import Post from "./Post";

function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return null;
}

function PostList({ array }) {
	const postElement = (array) =>
		array.map((post) => <Post key={post.id} {...post} />);
	return (
		<>
			<ScrollToTopOnMount />
			<List
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{postElement(array)}
			</List>
		</>
	);
}

export default PostList;
