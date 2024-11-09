// create schema

import mongoose, { Schema } from "mongoose";


const projectSchema = new Schema(
	{
		name: {
			type: String,
		},
		link: {
			type: String,
		},
		source_code: {
			type: String,
		},
		image: {
			type: String || File, // Storing the URL or path of the image
			required: true,
			validate: {
				validator: function (v) {
					// Check if the URL ends with a valid image extension
					return /\.(jpg|jpeg|png|gif|webp)$/.test(v);
				},
				message: (props) =>
					`${props.value} is not a valid image file format!`,
			},
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Project =
	mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
