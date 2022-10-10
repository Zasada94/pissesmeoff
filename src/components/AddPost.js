import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert, Box, Card, InputLabel, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import { addPost } from "../redux/actions";

const defaultValues = {
	title: "",
	author: "",
	img: "",
};

function Info(props) {
	return <Alert elevation={6} severity="info" variant="filled" {...props} />;
}

function AddPost() {
	const dispatch = useDispatch();
	const [message, setMessage] = useState("");
	const { control, handleSubmit, reset } = useForm({ defaultValues });

	const fields = [
		{
			nameField: "Title*",
			id: "title",
			halperText: "Title for what pisses You off",
		},
		{
			nameField: "Text*",
			id: "text",
			halperText: "Write down what pisses You off:",
		},
	];

	const formField = fields.map(({ nameField, id, helperText }) => (
		<Box key={id}>
			<InputLabel htmlFor={id}>{nameField}</InputLabel>
			<Controller
				name={id}
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextField
						fullWidth
						id={id}
						variant="outlined"
						helperText={helperText}
						value={value}
						onChange={onChange}
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
		<Card>
			<Typography
				variant="h6"
				component="div"
				sx={{ margin: "15px 0 10px 20px" }}
			>
				Add post
			</Typography>
			<form onSubmit={handleSumbit(onSubmit)}>
				
			</form>
		</Card>
	);
}

export default AddPost;
