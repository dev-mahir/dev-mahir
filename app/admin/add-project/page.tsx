"use client";
import React, { useState } from "react";
import { PortfolioTypes } from "../../../types.ds";

type Props = {};

function AddProject({}: Props) {
	const [input, setInput] = useState<PortfolioTypes>({
		name: "",
		link: "",
		source_code: "",
		image: "",
	});

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setInput((prevState) => ({
			...prevState,
			photo: e.target.files[0],
		}));
	};

	return (
		<section>
			<form action="">
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
					<input
						type="file"
						name="photo"
						id="photo"
						accept="image/*"
						onChange={handleFileChange}
						className="py-3 px-3 text-light_gray"
					/>
				</div>
				<div className="mb-3">
					<button className="btn">Add project</button>
				</div>
			</form>
		</section>
	);
}

export default AddProject;
