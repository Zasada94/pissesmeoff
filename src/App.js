import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { css } from "@emotion/react";

const myTheme = createTheme(
	{
		values: {
			sm: "480",
			md: "720",
			lg: "1080",
			xl: "1200",
		},
	},
	{
		palette: {
			mode: "dark",
			primary: {
				light: "#e7f5f0",
				middle: "#e7f5f0",
				main: "#0095b6",
				dark: "#232b2b",
			},
			secondary: {
				main: "#FF6347",
			},
		},
		typography: {
			fontFamily: "'Roboto', sans-serif",
		},
	}
);

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<div
				className="root"
				style={{
					flexGrow: 1,
					backgroundColor: `${myTheme.palette.primary.dark}`,
					minHeight: "100vh",
				}}
			>
				co tam
				<header className="App-header">hello world</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
