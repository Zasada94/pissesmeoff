import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Alert,
	Box,
	Button,
	Card,
	InputLabel,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { addPost } from "../redux/actions";
import { useTheme } from "@mui/material/styles";

const defaultValues = {
	title: "",
	text: "",
};

const AddPost = () => {
	const dispatch = useDispatch();
	const [message, setMessage] = useState("");
	const { control, handleSubmit, reset } = useForm({ defaultValues });

	const theme = useTheme();

	const fields = [
		{
			nameField: "Post title*",
			id: "title",
			helperText: "Title for what pisses You off:",
		},
		{
			nameField: "Comment content*",
			id: "text",
			helperText: "Write down what pisses You off:",
		},
	];

	const formField = fields.map(({ nameField, id, helperText }) => (
		<Box key={id}>
			<InputLabel
				htmlFor={id}
				sx={{
					color: "white",
				}}
			>
				{nameField}
			</InputLabel>
			<Controller
				name={id}
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextField
						fullWidth
						id={id}
						required
						variant="outlined"
						placeholder={helperText}
						value={value}
						onChange={onChange}
						color="secondary"
						sx={{
							marginBottom: "25px",
							"& ::placeholder": {
								color: "primary.light",
								fontSize: "12px",
							},
							"& input": {
								color: "primary.light",
							},
						}}
					/>
				)}
			/>
		</Box>
	));

	const onSubmit = ({ title, text }) => {
		dispatch(addPost({ title, text }));
		setMessage("Post added. Does It seriously pisses You off?");
		reset();
	};

	const handleClose = (reason) => {
		if (reason === "clickaway") {
			return;
		}
		setMessage("");
	};

	return (
		<Card
			sx={{
				maxWidth: 600,
				margin: "10px auto",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "black",
				color: "primary.light",
			}}
		>
			<Typography variant="h6" component="div" sx={{ margin: "10px auto" }}>
				ADD POST
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)} style={{ padding: 20 }}>
				{formField}
				<Box>
					<Button
						type="submit"
						variant="contained"
						fullWidth
						sx={{ marginBottom: 20 }}
					>
						submit
					</Button>
					<Button
						type="reset"
						variant="contained"
						fullWidth
						onClick={() => reset()}
					>
						reset form
					</Button>
				</Box>
			</form>
			{message ? (
				<Snackbar open autoHideDuration={3000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success">
						{message}
					</Alert>
				</Snackbar>
			) : null}
		</Card>
	);
};

export default AddPost;
