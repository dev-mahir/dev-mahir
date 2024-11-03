"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import "./tools.Module.css";

type Props = {};

const Page = (props: Props) => {
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
		<>
			<Head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2401442074021157"
					crossOrigin="anonymous"></script>
			</Head>

			

			<div className="py-10 container">
				<div className="flex gap-10 flex-wrap">
					{data.map((item, index: number) => (
						<Link
							key={index}
							href={`/tools/${item.url}`}
							className="text-light_gray font-semibold
                             text-xl  duration-300 bg-gray-800 px-8 py-7 rounded-md flex-grow text-center hover:bg-gray-700">
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Page;
