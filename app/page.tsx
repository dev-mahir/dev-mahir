import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Portfolio/Portfolio";
import SkillLine from "../components/Skills/SkillLine";
import WhatIDo from "../components/WhatIDo/WhatIDo";

export default function Home() {
	return (
		<>
			<div className="space-y-10 bg-black_blue -mt-2">
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
