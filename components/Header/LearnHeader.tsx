"use client";
import useModal from "@/hooks/useModal";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import "./header.css";
import { usePathname } from "next/navigation";
import { learnMenuMain } from "../../constants";

export default function LearnHeader() {
	const router = usePathname();

	const [isOpen, modalRef, handleToggle] = useModal();

	return (
		<header className="py-5 border-b border-b-gray-700  bg-black_blue">
			<div className="container flex  justify-between items-center">
				<div>
					{/* logo  */}
					<Link
						href="/learn"
						className="text-light_red text-2xl font-semibold">
						Md Mahir
						{/* <Image src={logo} width={150} height={50} alt="" /> */}
					</Link>
				</div>
				<nav
					ref={modalRef}
					className={`_mobile-menu _navbar-menu  ${
						isOpen ? "translate-x-0" : " lg:block"
					}`}>
					<button
						className="absolute top-6 right-6 border border-gray-500 h-9 w-9 flex justify-center items-center
						 lg:hidden "
						onClick={handleToggle}>
						<i className="text-2xl text-light_gray ri-close-line"></i>
					</button>

					{ learnMenuMain.map( menu => 	<Link
						href="/"
						onClick={handleToggle}
						className="text-light_gray font-semibold  hover:text-light_red duration-300">
						{menu.name}
					</Link>)}

				
				
				</nav>

				<button
					className={`${isOpen ? "hidden" : "block"} lg:hidden`}
					onClick={handleToggle}>
					<i className="text-2xl text-light_gray ri-menu-line"></i>
				</button>
			</div>
		</header>
	);
}
