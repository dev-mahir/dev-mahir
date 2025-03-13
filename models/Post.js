
import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
	{
		title: {
			type: String,
		},
		image: {
			type: String,
		},
		author: {
			type: String,
		},
		tag: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
