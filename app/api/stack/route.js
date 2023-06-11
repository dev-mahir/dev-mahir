import { NextResponse } from "next/server";

import mongoose from "mongoose";

import { Schema } from "mongoose";

const stackSchema = new Schema({
	url: { type: String },
	description: { type: String },
});

const Javascript =
	mongoose.models.Javascript || mongoose.model("Javascript", stackSchema);

export default Javascript;

const connectDB = async () => {
	await mongoose.connect(process.env.MONGO_URL),
		() => {
			console.log("Databse connected");
		};
};

export async function GET(request) {
	await connectDB();
	try {
		const data = await request.josn();
		const content = await Javascript.create(data);

		return NextResponse.json(content);
		console.log(request);
	} catch (error) {
		console.log(error);
	}
}





// Create request

export async function POST(request) {
	await connectDB();
	try {
		const data = await request.json();
		console.log(data);
		const content = await Javascript.create(data);
	} catch (error) {
		console.log(error);
	}
}
