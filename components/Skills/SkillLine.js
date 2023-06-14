"use client";

const SkillLine = () => {
	const data1 = [
		{
			name: "Figma",
			percentange: 80,
		},
		{
			name: "Adobe XD",
			percentange: 80,
		},
		{
			name: "Photoshop",
			percentange: 60,
		},
		{
			name: "Illustrator",
			percentange: 75,
		},
		{
			name: "Github",
			percentange: 80,
		},
	];
	const data2 = [
		{
			name: "Javascript",
			percentange: 80,
		},
		{
			name: "React",
			percentange: 80,
		},
		{
			name: "Next.js",
			percentange: 80,
		},
		{
			name: "Node js",
			percentange: 60,
		},
		{
			name: "MongoDB",
			percentange: 75,
		},
	];

	return (
		<section className="container">
			<div className="py-14">
				<div>
					<h3 className="_subtitle pl-10 text-light_red font-bold text-lg sm:text-xl after:bg-light_red after:w-[35%] after:left-0 ">
						Skills
					</h3>
					<h2 className="_title">My Skills</h2>
				</div>
				<div className="grid grid-cols-2 gap-12 mt-10">
					<div>
						{data1?.map((item, i) => (
							<div key={i} className="box mb-4 relative">
								<h4 className="text-white text-sm sm:text-[15px] font-bold pb-1">
									{item.name}
								</h4>
								<div className="line bg-[#eee] h-1 rounded-r-full">
									<div
										style={{
											width: `${item.percentange}%`,
										}}
										className={`progress bg-light_red h-full  rounded-r-full `}>
										<span className="absolute text-white top-0 right-0 text-sm font-bold">
											{item.percentange}%
										</span>
									</div>
								</div>
							</div>
						))}
					</div>

					<div>
						{data2?.map((item, i) => (
							<div key={i} className="box mb-4 relative">
								<h4 className="text-white text-sm sm:text-[15px] font-bold pb-1">
									{item.name}
								</h4>
								<div className="line bg-[#eee] h-1 rounded-r-full">
									<div
										style={{
											width: `${item.percentange}%`,
										}}
										className={`progress bg-light_red h-full  rounded-r-full `}>
										<span className="absolute text-white top-0 right-0 text-sm font-bold">
											{item.percentange}%
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillLine;
