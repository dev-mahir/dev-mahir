"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
	const router = usePathname();

	const date = new Date();

	return (
		<>
			{router.split("/")[1] !== "admin" && (
				<footer className="py-5 border-t border-t-gray-600">
					<div className="flex justify-center gap-2">
						<p className="text-light_gray font-medium ">
							All rights reserved by
						</p>
						<Link href="#" className="text-light_red font-semibold">
							Md Mahir
						</Link>
						<p className="text-light_gray font-medium ">
							©{date.getFullYear()}
						</p>
					</div>
				</footer>
			)}
		</>
	);
}
