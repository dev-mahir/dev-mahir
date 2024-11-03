import nodemailer from "nodemailer";

/**
 *
 * @param {*} data
 */

export const sendMail = async (data) => {
	// create transport
	let transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_ID,
			pass: process.env.MAIL_PASS,
		},
	});
	try {
		await transport.sendMail({
			from: `Crako Bio <${process.env.MAIL_ID}>`,
			subject: "Contact message",
			to: data.email,
			text: `Hi, This is ${data.name}. ${data.message}`,
		});
	} catch (error) {
		console.log(error);
	}
};
