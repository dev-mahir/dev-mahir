import Link from "next/link";
import React from "react";

export default function Footer() {
	const date = new Date();

	return (
		<footer className="py-5 border-t border-t-gray-600">
			<div className="flex justify-center gap-2">
				<p className="text-light_gray font-medium ">
					All rights reserved by
				</p>
				<Link
					target="_blank"
					href="http://crakotech.vercel.app"
					className="text-light_red font-semibold">
					CrakoTech
				</Link>
				<p className="text-light_gray font-medium ">
					©{date.getFullYear()}
				</p>
			</div>
		</footer>
	);
}
