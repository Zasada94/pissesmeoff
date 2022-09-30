import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import PostList from "./PostList";
import AddPost from "./AddPost";
import HomePage from "./HomePage";

function Page() {
	const hot = useSelector((state) => state.posts.hot);
	const regular = useSelector((state) => state.posts.regular);
	const favourites = useSelector((state) =>
		[...state.posts.regular, ...state.posts.hot].filter(
			(post) => post.favourites
		)
	);
	return (
		<Container>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HomePage />,<PostList array={regular} />
						</>
					}
				></Route>
				<Route
					path="/pissesmeoff"
					element={
						<>
							<HomePage />,<PostList array={regular} />
						</>
					}
				></Route>
				<Route
					path="/regular"
					element={
						<>
							<HomePage />,<PostList array={regular} />
						</>
					}
				></Route>
				<Route
					path="/hot"
					element={
						<>
							<HomePage />,<PostList array={hot} />
						</>
					}
				></Route>
				<Route
					path="/favourites"
					element={
						<>
							<HomePage />,<PostList array={favourites} />
						</>
					}
				></Route>
				<Route path="/add_post" element={<AddPost />}></Route>
				<Route path="*" element={<Navigate to="/" replace />}></Route>
			</Routes>
		</Container>
	);
}

export default Page;
