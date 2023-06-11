import Image from "next/image";
import React from "react";
import {
	fbLink,
	instagramLink,
	linkedinLink,
	youtubeLink,
} from "@/data/social";
import { bannerImg } from "@/data/changeImg";

export default function Banner() {
	return (
		<section className="py-14 md:py-20 mt-20">
			<div className="container grid grid-cols-1 gap-y-9 md:gap-0 md:grid-cols-2 items-center">
				<div className="">
					<h5 className="text-xl _subtitle font-semibold text-light_red after:bg-light_red after:w-[40%] after:left-0 pl-12">
						Hello
					</h5>
					<h1 className="text-4xl text-white py-6 font-bold ">
						This is <span className="text-light_red">Rx John</span>
					</h1>
					<h4 className="text-xl font-semibold text-light_red">
						Mern Stack Developer
					</h4>
					<div className="mt-6">
						<button className="btn">Hire me</button>
						<button className="text-light_red font-semibold ml-3 underline">
							Download cv
							<i className="ml-2 ri-download-2-line"></i>
						</button>
					</div>
					<div className="text-light_gray flex items-center mt-10 sm:mt-14">
						<h5 className="font-bold ">
							Follow Me &nbsp; - &nbsp;
						</h5>
						<div className="flex space-x-4">
							<a
								href={fbLink}
								rel="noreferrer"
								target="_blank"
								className="hover:text-light_red">
								<i className="text-lg ri-facebook-fill"></i>
							</a>
							<a
								href={linkedinLink}
								rel="noreferrer"
								target="_blank"
								className="hover:text-light_red">
								<i className="text-lg ri-linkedin-fill"></i>
							</a>
							<a
								href={instagramLink}
								rel="noreferrer"
								target="_blank"
								className="hover:text-light_red">
								<i className="text-lg ri-instagram-line"></i>
							</a>
							<a
								href={youtubeLink}
								rel="noreferrer"
								target="_blank"
								className="hover:text-light_red">
								<i className="text-lg ri-youtube-line"></i>
							</a>
						</div>
					</div>
				</div>
				<div>
					<div>
						<Image
							src={bannerImg}
							alt=""
							width={500}
							height={500}
							className="rounded-[10px] mx-auto sm:ml-auto"
						/>
					</div>
					<div className="text-end -mt-7 animate-pulse ">
						<div
							className=" items-center px-5 py-1 rounded-md gap-x-4 inline-flex"
							style={{ background: "rgba(66, 48, 51, .8)" }}>
							<div className="bg-light_red rounded-md h-8 w-8 flex justify-center items-center">
								<i className="text-lg text-white ri-lightbulb-line"></i>
							</div>
							<div className="text-light_gray text-left">
								<h6 className="font-bold ">Experience</h6>
								<span className="font-semibold">
									<span className=" font-bold text-2xl pr-1">
										2
									</span>
									Years
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
