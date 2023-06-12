import { NextResponse } from "next/server";
import mongoose, { Schema } from "mongoose";
import { cl } from "@/utilis/cl";
import Javascript from "@/models/Javascript";

const connectDB = async () => {
	await mongoose.connect(process.env.MONGO_URL),
		() => {
			console.log("Databse connected");
		};
};

export async function GET(request) {
	await connectDB();
	try {
		const content = await Javascript.find();

		return NextResponse.json(content);
	} catch (error) {
		console.log(error);
	}
}

// Create request
export async function POST(request) {
	try {
		await connectDB();
		const data = await request.json();

		const content = await Javascript.create(data);
		return NextResponse.json(content);
	} catch (error) {
		console.log(error);
	}
}
