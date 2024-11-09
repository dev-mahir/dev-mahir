"use client";

import Head from "next/head";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Portfolio/Portfolio";
import SkillLine from "../components/Skills/SkillLine";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import Header from "../components/Header/Header";

export default function Home() {
	return (
		<>
			<Header />
			<div className="space-y-10">
				<Banner />
				<About />
				<WhatIDo />
				<Portfolio />
				<SkillLine />
				<Contact />
			</div>
		</>
	);
}
