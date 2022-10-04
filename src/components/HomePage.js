import { Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

function HomePage() {
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
				Are You pissed off by{" "}
				<span style={{ color: theme.palette.secondary.light }}>
					school? work? politics? ex-wife? neighbour? paycheck?{" "}
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
				Or maybe just everything enrages You?
				<span style={{ color: theme.palette.secondary.light }}> Share it </span>
				here, anonymously!
			</Typography>
		</Container>
	);
}

export default HomePage;
