"use client";
import React from "react";
import CountUp from "react-countup";

export default function ProjectCounter() {
	return (
		<div className="mt-5">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 ">
				<div className="flex items-center sm:flex-col sm:justify-center sm:items-center md:flex-row   gap-3 sm:gap-0">
					<i className=" ri-calendar-line text-red-500/20 text-8xl block"></i>
					<div className="flex gap-3  items-center mt-2  sm:flex-col sm:gap-1 md:flex-row sm:-mt-10 md:mt-1 md:-ml-20 lg:-ml-[90px]">
						<span className="font-bold text-4xl sm:text-3xl lg:text-2xl text-white">
							<CountUp end={100} duration={5} />
						</span>
						<h4 className="text-light_gray font-bold uppercase text-sm">
							years experience
						</h4>
					</div>
				</div>
				<div className="flex items-center sm:flex-col sm:justify-center sm:items-center md:flex-row   gap-3 sm:gap-0">
					<i className=" ri-calendar-line text-red-500/20 text-8xl block"></i>
					<div className="flex gap-3  items-center mt-2  sm:flex-col sm:gap-1 md:flex-row sm:-mt-10 md:mt-1 md:-ml-20 lg:-ml-[90px]">
						<span className="font-bold text-4xl sm:text-3xl lg:text-2xl text-white">
							<CountUp end={100} duration={5} />
						</span>
						<h4 className="text-light_gray font-bold uppercase text-sm">
							years experience
						</h4>
					</div>
				</div>
				<div className="flex items-center sm:flex-col sm:justify-center sm:items-center md:flex-row   gap-3 sm:gap-0">
					<i className=" ri-calendar-line text-red-500/20 text-8xl block"></i>
					<div className="flex gap-3  items-center mt-2  sm:flex-col sm:gap-1 md:flex-row sm:-mt-10 md:mt-1 md:-ml-20 lg:-ml-[90px]">
						<span className="font-bold text-4xl sm:text-3xl lg:text-2xl text-white">
							<CountUp end={100} duration={5} />
						</span>
						<h4 className="text-light_gray font-bold uppercase text-sm">
							years experience
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
