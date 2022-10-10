import { useDispatch } from "react-redux";
import { addUpVote, changeFavourite } from "../redux/actions";
import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	Divider,
	IconButton,
	Typography,
} from "@mui/material";
import { ThumbDownRounded, FavoriteRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function Post({ title, text, upvotes, id, favourite }) {
	const theme = useTheme();
	const dispatch = useDispatch();

	const [like, setLike] = React.useState(true);

	const handleLike = () => {
		setLike(false);
	};

	const checkIfMoreThan1 = () => {
		if ({ upvotes } <= "1") {
			return "It pisses off only author";
		} else {
			return `It pisses off ${upvotes} people`;
		}
	};

	return (
		<Card
			sx={{
				overflow: "hidden",
				backgroundColor: "black",
				color: theme.palette.secondary.light,
				maxWidth: "1000px",
				width: "95%",
				marginBottom: "20px",
				borderRadius: "8px",
			}}
		>
			<Typography
				variant="h6"
				component="div"
				sx={{ margin: "15px 0 10px 20px" }}
			>
				{title}
			</Typography>
			<Divider variant="middle" sx={{ backgroundColor: "#414141" }} />
			<CardContent>
				<Typography
					sx={{ fontSize: 13, color: theme.palette.primary.light }}
					gutterBottom
				>
					{text}
				</Typography>
			</CardContent>
			<Divider variant="middle" sx={{ backgroundColor: "#414141" }} />
			<CardActions
				sx={{
					justifyContent: "space-evenly",
					marginTop: 0.1,
					marginBottom: 0.1,
					flexWrap: "wrap",
				}}
			>
				<Typography
					variant="h6"
					component="div"
					sx={{ fontSize: 14, padding: "8px" }}
				>
					{checkIfMoreThan1()}
				</Typography>
				<IconButton
					aria-label="add up vote"
					onClick={() => {
						handleLike();
						dispatch(addUpVote({ upvotes, id, type: "upvotes" }));
					}}
					sx={{
						color: like
							? theme.palette.secondary.light
							: theme.palette.secondary.light,
						opacity: like ? "1" : "0.7",
					}}
				>
					<ThumbDownRounded
						sx={{
							fontSize: 18,
							padding: "0 5px 0 5px",
							color: like ? "#414141" : theme.palette.secondary.light,
						}}
					/>
					<Typography variant="h6" component="div" sx={{ fontSize: 14 }}>
						Pisses me off too
					</Typography>
				</IconButton>

				<IconButton
					aria-label="favourites"
					onClick={() => {
						dispatch(changeFavourite({ favourite, id }));
					}}
					sx={{
						color:
							favourite === false ? theme.palette.secondary.light : "#de0000",
						minWidth: "22%",
						marginLeft: "0px!important",
					}}
				>
					<FavoriteRounded
						sx={{
							fontSize: 18,
							padding: "0 5px 0 0",
							color: favourite === false ? "	#414141" : "#de0000",
						}}
					/>
					<Typography variant="h6" component="div" sx={{ fontSize: 14 }}>
						Favourite
					</Typography>
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Post;
