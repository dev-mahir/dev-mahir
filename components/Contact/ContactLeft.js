"use client";

import { location, mail, phone } from "@/data/contact";
import {
	instagramLink,
	linkedinLink,
	youtubeLink,
	fbLink,
} from "@/data/social";
import React from "react";

const ContactLeft = () => {
	return (
		<div>
			<h3 className="_subtitle pl-10 text-light_red font-bold text-lg sm:text-xl after:bg-light_red after:w-[25%] after:left-0 ">
				Contact Me
			</h3>
			<h2 className="_title">Let&apos;s Work Together</h2>
			<p className="text-light_gray pt-4  md:pr-6 lg:pr-12">
				Feel free to contact me.
			</p>
			<div className="space-y-4 pt-5 flex flex-col">
				<div>
					<span className="inline-flex gap-x-3 items-center text-light_gray font-semibold group">
						<span className="text-light_red text-xl bg-red-400/10 p-1 rounded-sm group-hover:text-light_red">
							<i className="group-hover:text-light_gray duration-300 ri-map-pin-2-fill"></i>
						</span>
						{location}
					</span>
				</div>

				<div>
					<a
						href={`tel:${mail}`}
						className="inline-flex gap-x-3 group items-center text-light_gray font-semibold">
						<span className="text-light_red text-xl bg-red-400/10 p-1 rounded-sm">
							<i className="group-hover:text-light_gray duration-300 ri-mail-line"></i>
						</span>
						{mail}
					</a>
				</div>
				<div>
					<a
						href={`tel:${phone}`}
						className="inline-flex group gap-x-3 items-center text-light_gray font-semibold">
						<span className="text-light_red text-xl bg-red-400/10 p-1 rounded-sm">
							<i className="ri-phone-fill group-hover:text-light_gray duration-300"></i>
						</span>
						{phone}
					</a>
				</div>
			</div>
			<div className="flex space-x-4 text-light_gray pt-5">
				<a
					href={fbLink}
					rel="noreferrer"
					target="_blank"
					className="hover:text-light_red">
					<i className="ri-facebook-fill"></i>
				</a>
				<a
					href={linkedinLink}
					rel="noreferrer"
					target="_blank"
					className="hover:text-light_red">
					<i className="ri-linkedin-fill"></i>
				</a>
				<a
					href={instagramLink}
					rel="noreferrer"
					target="_blank"
					className="hover:text-light_red">
					<i className="ri-instagram-fill"></i>
				</a>
				{/* <a
					href={youtubeLink}
					rel="noreferrer"
					target="_blank"
					className="hover:text-light_red">
					<i className="ri-youtube-fill"></i>
				</a> */}
			</div>
		</div>
	);
};

export default ContactLeft;
