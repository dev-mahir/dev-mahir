"use client";

import React from "react";
import Link from "next/link";

const AboutLeft = () => {
	return (
		<div className="space-y-4">
			<h3 className="_subtitle pl-10 text-light_red font-bold text-lg sm:text-xl after:bg-light_red after:w-[25%] after:left-0 ">
				About Me
			</h3>
			<h2 className="_title">
				Hi, Im Here <br />
				To Help Your Next Project
			</h2>
			<p className="text-light_gray ">
				Professional Full-Stack Web Developer. I&#39;m Mahir Passionate
				at web development.
			</p>

			<div className="flex gap-x-9 py-4">
				<div className="space-y-4">
					<p className="text-white flex items-center gap-x-2 font-semibold">
						<i className="text-lg text-light_red ri-check-fill"></i>
						Quality
					</p>
					<p className="text-white flex items-center gap-x-2 font-semibold">
						<i className="text-lg text-light_red ri-check-fill"></i>
						Integrity
					</p>
				</div>
				<div className="space-y-4">
					<p className="text-white flex items-center gap-x-2 font-semibold">
						<i className="text-lg text-light_red ri-check-fill"></i>
						Support
					</p>
					<p className="text-white flex items-center gap-x-2 font-semibold">
						<i className="text-lg text-light_red ri-check-fill"></i>
						Security & Safety
					</p>
				</div>
			</div>

			<button className="text-light_red font-bold bg-dark_blue  border border-light_red px-6 py-2 rounded-md hover:bg-black_blue hover:text-light_gray duration-200 hover:border-[#333]">
				<Link href="#portfolio">My Portfolio </Link>
			</button>
		</div>
	);
};

export default AboutLeft;
