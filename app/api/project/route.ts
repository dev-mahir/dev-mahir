import { NextResponse } from "next/server";
import connectDB from "../../../config/db";
import Project from "../../../models/Project";
import formidable from "formidable";
import fs from "fs/promises";
import path from "path";

export const config = {
	api: {
		bodyParser: false, // Disable body parsing for file uploads
	},
};

export async function POST(request: Request) {
	try {
		await connectDB();

		const projectData = await request.json();

		const project = await Project.create(projectData);

		return NextResponse.json(project);
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: error.message });
	}
}
