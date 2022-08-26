import "./App.css";
import { createTheme } from "@mui/material/styles";

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
				dark: "#001440",
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
			<div className="App">
				<header className="App-header"></header>
			</div>
		</ThemeProvider>
	);
}

export default App;
