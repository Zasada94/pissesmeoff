import * as React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import PostList from "./PostList";
import AddPost from "./AddPost";
import HomePage from "./HomePage";

function Page() {
	// const hot = useSelector((state) => state.posts.hot);
	// const regular = useSelector((state) => state.posts.regular);
	// const favourites = useSelector((state) =>
	// 	[...state.posts.regular, ...state.posts.hot].filter(
	// 		(post) => post.favourite
	// 	)
	// );
	return (
		<Container>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				{/*<Route
						path="/pissesmeoff"
						element={<Navigate to="/regular" replace />}
					></Route> */}
				{/* <Route path="/regular" element={<PostList array={regular} />}></Route>
					<Route path="/hot" element={<PostList array={hot} />}></Route>*/}
				<Route path="/favourites" element={<PostList />}></Route>
				<Route path="/add_post" element={<AddPost />}></Route>
				{/* <Route path="*" element={<Navigate to="/" replace />}></Route> */}
			</Routes>
		</Container>
	);
}

export default Page;
