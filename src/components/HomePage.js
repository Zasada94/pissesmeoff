import {Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

function HomePage() {
	const theme = useTheme();
	return (
		<Container
			maxWidth="lg"
			noWrap
			sx={{
				m: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				color: "primary.light",
				overflow: "hidden",
			}}
		>
			<Typography
				variant="subtitle2"
				sx={{
					my: 0.5,
					fontFamily: "League Spartan",
					fontWeight: "500",
					[theme.breakpoints.up("md")]: {
						fontSize: "1.2rem",
					},
				}}
			>
				Does
				<span style={{ color: "	#cc3300" }}> school? work? politics? ex-wife? neighbour? paycheck?</span> pisses
				You off?
			</Typography>
			<Typography
				variant="subtitle2"
				sx={{
					my: 1,
					fontFamily: "League Spartan",
					fontWeight: "500",
					[theme.breakpoints.up("md")]: {
						fontSize: "1.2rem",
					},
				}}
			>
				Or maybe just everything enrages You?<span style={{ color: "#cc3300" }}> Share it </span> here, anonymously!
			</Typography>
		</Container>
	);
}

export default HomePage;
