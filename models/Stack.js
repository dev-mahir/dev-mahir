// create schema

import mongoose, { Schema } from "mongoose";



const stackSchema = new Schema({
	name: {
		type: String,
	},
	content: [
		{
			url: { type: String },
			description: { type: String },
		},
	],
});

const Stack = mongoose.models.Stack || mongoose.model("Stack", stackSchema);

export default Stack;
