import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import PostList from "./PostList";
import AddPost from "./AddPost";
import AddPostBanner from "./AddPostBanner";
import HomeBanner from "./HomeBanner";

function Page() {
	const hot = useSelector((state) => state.posts.hot);
	const regular = useSelector((state) => state.posts.regular);
	const favourites = useSelector((state) =>
		[...state.posts.regular, ...state.posts.hot].filter(
			(post) => post.favourite
		)
	);
	return (
		<Container>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HomeBanner />
							<PostList array={regular} />
						</>
					}
				></Route>
				<Route
					path="/pissesmeoff"
					element={
						<>
							<HomeBanner />
							<PostList array={regular} />
						</>
					}
				></Route>
				<Route
					path="/regular"
					element={
						<>
							<HomeBanner />
							<PostList array={regular} />
						</>
					}
				></Route>
				<Route
					path="/hot"
					element={
						<>
							<HomeBanner />
							<PostList array={hot} />
						</>
					}
				></Route>
				<Route
					path="/favourites"
					element={
						<>
							<HomeBanner />
							<PostList array={favourites} />
						</>
					}
				></Route>
				<Route
					path="/add"
					element={
						<>
							<AddPostBanner />
							<AddPost />
						</>
					}
				></Route>
				<Route path="*" element={<Navigate to="/" replace />}></Route>
			</Routes>
		</Container>
	);
}

export default Page;
