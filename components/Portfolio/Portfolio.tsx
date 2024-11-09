"use client";

import Image from "next/image";
import React from "react";
import { PortfolioTypes } from "../../types.ds";
import { portfolioItem } from "../../data/portolio";
import Link from "next/link";

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
					{portfolioItem.map(
						(item: PortfolioTypes, index: number) => (
							<Link href={item.link} key={index} target="_blank">
								<div className="bg-dark_blue cursor-pointer p-2 rounded-md group border-2 border-transparent duration-300 hover:border-light_gray hover:border-2">
									<div className="overflow-hidden rounded-md h-[300px] relative group">
										<Image
											src={item.image}
											alt=""
											height={500}
											width={300}
											loading="lazy"
											className="w-full h-full mx-auto object-top object-cover group-hover:object-bottom group-hover:rounded-md duration-500 rounded-md"
										/>
										<div className="absolute top-0 left-0 bg-gray-800/50 w-full h-full flex justify-center items-center  opacity-0 invisible group-hover:opacity-100 group-hover:visible">
											<h2 className="font-semibold text-xl text-center text-white">
												{item.name}
											</h2>
										</div>
									</div>
								</div>
							</Link>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
