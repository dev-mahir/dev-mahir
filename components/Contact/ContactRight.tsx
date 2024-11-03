"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const ContactRight = () => {
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (event) => {
		setInput((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleContactFromSubmit = async (event) => {
		event.preventDefault();
		if (!input.name || !input.email || !input.message) {
			toast.error("All fields are required");
		} else {
			try {
				setLoading(true);
				await axios
					.post("/api/contact", input)
					.then((res) => {
						setLoading(false);
						setInput({
							name: "",
							email: "",
							message: "",
						});
						toast.success("Message send successfully!");
					})
					.catch((error) => {
						setLoading(false);
						console.log(error);
					});
			} catch (error) {
				setLoading(false);
				toast.error("Message not send. Try again.");
				console.log(error);
			}
		}
	};

	return (
		<form
			onSubmit={handleContactFromSubmit}
			className="flex flex-col gap-5">
			<div>
				<label className="relative h-12 items-center text-light_gray">
					<input
						type="text"
						name="name"
						value={input.name}
						onChange={handleInputChange}
						placeholder="Name"
						className="bg-dark_blue w-full rounded-md h-full px-5 outline-none placeholder:text-light_gray"
					/>
					<i className=" absolute top-3 right-2 ri-user-line"></i>
				</label>
			</div>

			<div>
				<label className="relative h-12 items-center text-light_gray">
					<input
						type="email"
						name="email"
						value={input.email}
						onChange={handleInputChange}
						placeholder="Email"
						className="bg-dark_blue w-full rounded-md h-full px-5 outline-none placeholder:text-light_gray"
					/>
					<i className="absolute top-3 right-2  ri-mail-line"></i>
				</label>
			</div>
			<div className="block">
				<label className="relative h-12 items-center text-light_gray">
					<textarea
						name="message"
						rows={2}
						value={input.message}
						onChange={handleInputChange}
						placeholder="Message"
						className="w-full h-[80px] px-5 rounded-md text-light_gray placeholder:text-light_gray bg-dark_blue outline-none py-4"></textarea>
					<i className=" absolute top-3 right-2 text-light_gray ri-booklet-line"></i>
				</label>
			</div>

			<div className="mt-8">
				<button
					type="submit"
					className="text-light_red font-bold   bg-dark_blue border border-light_red px-6 py-2 rounded-md hover:bg-black_blue hover:text-light_gray duration-200 hover:border-[#333]">
					{loading && (
						<span className="pr-3  inline-block ">
							<i
								className="ri-loop-left-line text-xl animate-spin inline-block  
							"></i>
						</span>
					)}
					Send Message
				</button>
			</div>
		</form>
	);
};

export default ContactRight;
