"use client";
import useModal from "@/hooks/useModal";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import "./header.css";
import { usePathname } from "next/navigation";
import { main_menu } from "../../constants";

export default function Header() {
	const router = usePathname();

	const [isOpen, modalRef, handleToggle] = useModal();

	return (
		<>
			{router.split("/")[1] !== "admin" && (
				<header className="py-5 border-b border-b-gray-700 fixed top-0 left-0 w-full bg-black_blue z-50">
					<div className="container flex  justify-between items-center">
						<div>
							{/* logo  */}
							<Link
								href="/"
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

							{main_menu.map((item) => (
								<Link
									key={item.name}
									href={item.slug}
									onClick={handleToggle}
									className="text-light_gray font-semibold  hover:text-light_red duration-300">
									{item.name}
								</Link>
							))}
						</nav>

						<button
							className={`${
								isOpen ? "hidden" : "block"
							} lg:hidden`}
							onClick={handleToggle}>
							<i className="text-2xl text-light_gray ri-menu-line"></i>
						</button>
					</div>
				</header>
			)}
		</>
	);
}
