import Link from "next/link";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<div className="py-3">
			<Link href="/admin" className="px-5 text-light_red text-2xl font-semibold">
				Md Mahir
				{/* <Image src={logo} width={150} height={50} alt="" /> */}
			</Link>
			<nav className="mt-5">
				<Link
					href="/admin/add-project"
					className="text-white font-semibold hover:bg-light_gray block px-5">
					Add Project
				</Link>
			</nav>
		</div>
	);
};

export default Sidebar;
