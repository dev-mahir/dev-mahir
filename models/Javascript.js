// create schema

import mongoose, { Schema } from "mongoose";

const jsSchema = new Schema(
	{
		menu: {
			type: String,
		},
		submenu: {
			type: String,
		},
		content: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Javascript = mongoose.models.Js || mongoose.model("Js", jsSchema);

export default Javascript;
