import { useDispatch } from "react-redux";
import { addUpVote, changeFavorite } from "../redux/actions";
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
	const [fav, setFav] = React.useState(true);
	const [like, setLike] = React.useState(true);

	const handleFav = () => {
		setFav(!fav);
	};
	const handleLike = () => {
		setLike(!like);
	};

	const checkIfMoreThan1 = () => {
		if ({ upvotes } === 1) {
			return "It pisses off only author";
		} else {
			return `It pisses off ${upvotes} people`;
		}
	};

	return (
		<Card
			sx={{
				overflow: "visible",
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
				sx={{ margin: "5px 0 5px 20px" }}
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
				}}
			>
				<Typography variant="h6" component="div" sx={{ fontSize: 14 }}>
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
						handleFav();
						dispatch(changeFavorite({ favourite, id }));
					}}
					sx={{ color: fav ? theme.palette.secondary.light : "#de0000" }}
				>
					<FavoriteRounded
						sx={{
							fontSize: 18,
							padding: "0 5px 0 5px",
							color: fav ? "	#414141" : "#de0000",
						}}
					/>
					<Typography variant="h6" component="div" sx={{ fontSize: 14 }}>
						Add favourite
					</Typography>
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Post;
