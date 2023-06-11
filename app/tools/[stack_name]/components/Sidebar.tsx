import Link from "next/link";
import React from "react";
import AddItemModal from "./AddItemModal";

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<>
			<AddItemModal />
			<nav className="flex flex-col gap-y-3 pt-10">
				<button className="btn !px-1 !py-2 text-sm ">Add Item</button>
				<div className="divider"></div>
				<Link
					href="/tools/tailwind/#login"
					className="text-light_gray font-semibold text-sm hover:text-white">
					Login
				</Link>
				<Link
					href="#opp"
					className="text-light_gray font-semibold text-sm">
					OOP
				</Link>
				<Link
					href="#opp"
					className="text-light_gray font-semibold text-sm">
					OOP
				</Link>
				<Link
					href="#opp"
					className="text-light_gray font-semibold text-sm">
					OOP
				</Link>
				<Link
					href="#opp"
					className="text-light_gray font-semibold text-sm">
					OOP
				</Link>
			</nav>
		</>
	);
};

export default Sidebar;
