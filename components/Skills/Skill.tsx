"use client";

import React from "react";

const Skill = () => {
	const percentage = 80;
	return (
		<div className="py-14">
			<div className="flex justify-around flex-wrap gap-3">
				<div className="p-2 rounded-full border-2 border-dashed border-light_red w-[80px] h-[80px] md:w-[150px]  md:h-[150px] ">
					<div className="flex items-center justify-center flex-col h-full bg-dark_blue rounded-full">
						<span className="text-light_red font-bold text-[16px] md:text-2xl">
							95%
						</span>
						<span className="text-white font-bold text-[12px] md:text-xl">
							Figma
						</span>
					</div>
				</div>

				<div className="grid grid-cols-3"></div>

				<div className="p-2 rounded-full border-2 border-dashed border-light_red w-[80px] h-[80px] md:w-[150px]  md:h-[150px] ">
					<div className="flex items-center justify-center flex-col h-full bg-dark_blue rounded-full">
						<span className="text-light_red font-bold text-[16px] md:text-2xl">
							95%
						</span>
						<span className="text-white font-bold text-[12px] md:text-xl">
							Figma
						</span>
					</div>
				</div>

				<div className="p-2 rounded-full border-2 border-dashed border-light_red w-[80px] h-[80px] md:w-[150px]  md:h-[150px] ">
					<div className="flex items-center justify-center flex-col h-full bg-dark_blue rounded-full">
						<span className="text-light_red font-bold text-[16px] md:text-2xl">
							95%
						</span>
						<span className="text-white font-bold text-[12px] md:text-xl">
							Figma
						</span>
					</div>
				</div>

				<div className="p-2 rounded-full border-2 border-dashed border-light_red w-[80px] h-[80px] md:w-[150px]  md:h-[150px] ">
					<div className="flex items-center justify-center flex-col h-full bg-dark_blue rounded-full">
						<span className="text-light_red font-bold text-[16px] md:text-2xl">
							95%
						</span>
						<span className="text-white font-bold text-[12px] md:text-xl">
							Figma
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
