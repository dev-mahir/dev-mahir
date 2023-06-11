import { sendMail } from "@/utilis/sendMail";
import { NextResponse } from "next/server";

export async function POST(request) {
	const data = await request.json();
	const send = await sendMail({
		email: data.email,
		message: data.message,
		name: data.name,
	});
	console.log(send);
	return NextResponse.json({ message: "Message send successfully" });
}
