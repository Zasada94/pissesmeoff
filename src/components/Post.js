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
import {
	ThumbUpRounded,
	ThumbDownRounded,
	FavoriteRounded,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function Post({ title, text, upvotes, downvotes, id, favourite }) {
	const theme = useTheme();
	const dispatch = useDispatch();
	return (
		<Card
			sx={{
				overflow: "visible",
				backgroundColor: "black",
				color: theme.palette.secondary.light,
				maxWidth: "1000px",
				marginBottom: "20px",
			}}
		>
			<CardHeader title={title} />
			<Divider variant="middle" sx={{ backgroundColor: "#414141" }} />
			<CardContent>
				<Typography
					sx={{ fontSize: 14, color: theme.palette.primary.light }}
					color="text.secondary"
					gutterBottom
				>
					{text}
				</Typography>
			</CardContent>
			<Divider variant="middle" sx={{ backgroundColor: "#414141" }} />
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
							"& .b": {
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
					<FavoriteRounded />
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
