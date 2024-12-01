import { NextResponse } from "next/server";
import connectDB from "../../../config/db";
import Post from "@/models/Post";






// Defined Get All and Single Post both 
export async function GET(req) {
	const url = new URL(req.url);
	const slug = url.searchParams.get("slug");

	await connectDB();
	try {
		let content;

		if (slug) {
			// Fetch content based on the slug
			content = await Post.findOne({ src:slug });
			if (!content) {
				return NextResponse.json(
					{ message: "Post not found" },
					{ status: 404 }
				);
			}
		} else {
			content = await Post.find();
		}

		return NextResponse.json(content);
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
