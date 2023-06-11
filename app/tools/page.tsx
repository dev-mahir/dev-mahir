import Link from "next/link";
import React from "react";
import "./tools.Module.css";

type Props = {};

const page = (props: Props) => {
	const data = [
		{
			name: "Tailwind",
			url: "/tailwind",
		},
		{
			name: "Javascript",
			url: "/javascript",
		},
		{
			name: "Redux",
			url: "/redux",
		},
		{
			name: "Next js",
			url: "/nextjs",
		},
	];
	return (
		<div className="py-10 container">
			<div className="flex gap-10 flex-wrap">
				{data.map((item, index) => (
					<Link
						href={`/tools/${item.url}`}
						className="text-light_gray font-semibold
                             text-xl  duration-300 bg-gray-800 px-8 py-7 rounded-md flex-grow text-center hover:bg-gray-700">
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default page;
