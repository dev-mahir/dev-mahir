import { sendMail } from "@/utilis/sendMail";
import { NextResponse } from "next/server";

export async function POST(request) {
	const data = await request.json();
	await sendMail({
		email: data.email,
		message: data.message,
		name: data.name
	});
	return NextResponse.json({ message: "Message send successfully" });
}
