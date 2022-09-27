import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Page from "./components/Page";

const theme = createTheme(
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
				light: "#cc3300",
			},
		},
		typography: {
			fontFamily: "'Roboto', sans-serif",
		},
	}
);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div
				className="root"
				style={{
					flexGrow: 1,
					backgroundColor: theme.palette.primary.dark,
					minHeight: "100vh",
				}}
			>
				<Header />
				<main>
					<Page />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
