"use client";

import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";


const About = () => {
	return (
		<div className="py-16" id="about">
			<div className="container gap-y-10  grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center">
				<AboutLeft />
				<AboutRight />
			</div>
		</div>
	);
};

export default About;
