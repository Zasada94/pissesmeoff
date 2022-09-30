import { useDispatch } from "react-redux";
import { addUpVote, addDownVote, changeFavorite } from "../redux/actions";
import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	IconButton,
	Typography,
} from "@mui/material";
import { ThumbUpRounded, ThumbDownRounded, FavoriteRounded } from "@mui/icons-material";

function Post({ title, text, upvotes, downvotes, id, favourite }) {
	const dispatch = useDispatch();
	return (
		<Card>
			<CardHeader title={title} />
			<Divider/>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{text}
				</Typography>
				<Typography variant="h5" component="div">
					be lent
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					justifyContent: "space-evenly",
					marginTop: 5,
					marginBottom: 5,
				}}
			>
				<IconButton
					aria-label="add up vote"
					color="primary"
					onClick={() => dispatch(addUpVote({ upvotes, id, type: "upvotes" }))}
				>
					<ThumbUpRounded
						sx={{
							'& .b': {
								fontSize: 20,
								paddingLeft: 10,
							},
						}}
					/>
					<b>{upvotes}</b>
				</IconButton>

				<IconButton
					aria-label="favorites"
					onClick={() => {
						dispatch(changeFavorite({ favourite, id }));
					}}
				>
					<FavoriteRounded
					/>
				</IconButton>

				<IconButton
					aria-label="add down vote"
					color="secondary"
					onClick={() =>
						dispatch(addDownVote({ downvotes, id, type: "downvotes" }))
					}
				>
					<ThumbDownRounded />
					<b>{downvotes}</b>
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Post;
