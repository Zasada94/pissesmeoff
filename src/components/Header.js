import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SurfingIcon from "@mui/icons-material/Surfing";
import { useTheme } from "@mui/material/styles";

const pages = ["regular", "hot", "favourites", "add"];

const Header = () => {
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				color: theme.palette.primary.light,
				backgroundColor: "black",
			}}
		>
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/pissesmeoff"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "Original Surfer",
							letterSpacing: ".2rem",
							color: "inherit",
							textDecoration: "none",
							alignItems: "center",
						}}
					>
						<SurfingIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
						Pisses Me Off
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleClick}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleClose}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleClose}
									sx={{
										color: "primary.dark",
										display: "block",
										textAlign: "left",
										width: "100%",
										height: "100%",
										px: 3,
										py: 1,
									}}
									component={Link}
									to={`/${page}`}
								>
									{page}
								</Button>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "Original Surfer",
							letterSpacing: ".2rem",
							color: "inherit",
							textDecoration: "none",
							alignItems: "center",
						}}
					>
						<SurfingIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
						Pisses Me Off
					</Typography>
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleClick}
								sx={{
									my: 2,
									color: "inherit",
									display: "block",
									lineHeight: 1,
									textAlign: "center",
									minWidth: "auto",
								}}
								component={Link}
								to={`/${page}`}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
