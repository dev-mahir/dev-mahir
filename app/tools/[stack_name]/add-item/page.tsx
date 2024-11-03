"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import TextEditor from "./components/TextEditor";
import parse from "html-react-parser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

type Props = {};

interface InputType {
	menu: string;
	submenu: string;
}

const Page = (props: Props) => {
	const [contents, setContents] = useState<string>("");

	const [input, setInput] = useState<InputType>({
		menu: "",
		submenu: "",
	});

	const desc = parse(contents); //

	const postData = async () => {
		await fetch("/api/stack/javascript", {
			method: "POST",
			body: JSON.stringify({ ...input, content: contents }),
		});
	};

	const mutation = useMutation(postData, {
		onSuccess: () => {
			setInput((prevState) => ({
				menu: "",
				submenu: "",
			}));
			setContents("");
			toast.success("Added successfully");
		},
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!input.menu || !contents) {
			toast.error("All fields are required");
		} else {
			mutation.mutate({ ...input, content: contents });
		}
	};

	return (
		<div className="flex gap-10">
			<div className="w-[60%] bg-gray-800 rounded-md flex-shrink-0 px-5 py-8">
				<form onSubmit={handleFormSubmit}>
					<div className="mb-4">
						<label className="relative h-12 items-center text-light_gray">
							<input
								type="text"
								name="menu"
								value={input.menu}
								onChange={handleInputChange}
								placeholder="Menu"
								className="bg-dark_blue w-full rounded-md h-full px-5 outline-none placeholder:text-light_gray"
							/>
						</label>
					</div>
					<div className="mb-4">
						<label className="relative h-12 items-center text-light_gray">
							<input
								type="text"
								name="submenu"
								value={input.submenu}
								onChange={handleInputChange}
								placeholder="Sub menu"
								className="bg-dark_blue w-full rounded-md h-full px-5 outline-none placeholder:text-light_gray"
							/>
						</label>
					</div>

					<div className="mt-5">
						<TextEditor
							contents={contents}
							setContents={setContents}
						/>
					</div>
					<div className="mt-5">
						<button
							type="submit"
							className="btn bg-gray-900 text-white border-none">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className="text-gray-500">{desc}</div>
		</div>
	);
};

export default Page;
