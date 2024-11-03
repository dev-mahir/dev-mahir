"use client";

import Image from "next/image";
import React from "react";
import ProjectCounter from "./ProjectCounter";
import { aboutImg } from "../../data/changeImg";


const AboutRight = () => {
	return (
		<div>
			<Image
				src={aboutImg}
				height={350}
				width={600}
				className="rounded-md  w-full"
				alt="mdmahir_about-me"
			/>
			<ProjectCounter />
		</div>
	);
};

export default AboutRight;
