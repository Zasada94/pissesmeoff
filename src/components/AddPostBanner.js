import { Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

function AddPostBanner() {
	const theme = useTheme();
	return (
		<Container
			maxWidth="lg"
			sx={{
				m: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				color: theme.palette.primary.light,
				overflow: "hidden",
				marginBottom: "0px",
			}}
		>
			<Typography
				variant="subtitle2"
				sx={{
					my: 0.5,

					fontFamily: "League Spartan",
					fontWeight: "500",
					fontSize: "1rem",
					[theme.breakpoints.up("md")]: {
						fontSize: "1.3rem",
					},
				}}
			>
				That is a tragedy.{" "}
				<span style={{ color: theme.palette.secondary.light }}>
					What the hell is going on?!{" "}
				</span>
			</Typography>
			<Typography
				variant="subtitle2"
				sx={{
					my: 0.5,
					fontFamily: "League Spartan",
					fontWeight: "500",
					fontSize: "1rem",
					[theme.breakpoints.up("md")]: {
						fontSize: "1.3rem",
					},
				}}
			>
				Write down what
				<span style={{ color: theme.palette.secondary.light }}>
					{" "}
					pisses You off,{" "}
				</span>
				God damn it.
			</Typography>
		</Container>
	);
}

export default AddPostBanner;
