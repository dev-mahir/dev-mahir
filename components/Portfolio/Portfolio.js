"use client";
import { portfolioImg } from "@/data/changeImg";
import Image from "next/image";
import React from "react";

const Portfolio = () => {


	return (
		<section className="container">
			<div className="py-14" id="portfolio">
				<h3 className="_subtitle pl-10 text-light_red font-bold text-lg sm:text-xl after:bg-light_red after:w-[22%] after:left-0 ">
					My Portfolio
				</h3>
				<div className=" lg:flex  justify-between">
					<h2 className="_title">Some Of My Distinguished Works</h2>
				</div>
				<div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-5 md:gap-7 mt-10">
					{portfolioImg.map((item, index) => (
						<div
							key={index}
							className="bg-dark_blue cursor-pointer p-2 rounded-md group border-2 border-transparent duration-300 hover:border-light_gray hover:border-2">
							<div className="overflow-hidden rounded-md h-[300px]">
								<Image
									src={item}
									alt=""
									height={500}
									width={500}
									loading="lazy"
									className="w-full h-full mx-auto  object-cover group-hover:scale-125 group-hover:rounded-md duration-500 rounded-md"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
