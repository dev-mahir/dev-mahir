"use client";
import React, { useState } from "react";
import { PortfolioTypes } from "../../../types.ds";

function AddProject() {
	const [input, setInput] = useState<PortfolioTypes>({
		name: "",
		link: "",
		source_code: "",
	});

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/project", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(input),
			});

			if (response.ok) {
				setInput((prevState) => ({
					name: "",
					link: "",
					source_code: "",
				}));
			}
		} catch (error) {
			console.log("Error front", error);
		}
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<input
						type="text"
						placeholder="name"
						name="name"
						value={input.name}
						onChange={handleInputChange}
						className="py-3 px-3 text-light_gray"
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						placeholder="Live link"
						name="link"
						value={input.link}
						onChange={handleInputChange}
						className="py-3 px-3 text-light_gray"
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						placeholder="Source code link"
						name="source_code"
						value={input.source_code}
						onChange={handleInputChange}
						className="py-3 px-3 text-light_gray"
					/>
				</div>

				<div className="mb-3">
					<button type="submit" className="btn">
						Add project
					</button>
				</div>
			</form>
		</section>
	);
}

export default AddProject;
