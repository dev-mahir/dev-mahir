import React from "react";
import "./tools.Module.css";
import Sidebar from "./components/Sidebar";

type Props = {};

const layout = ({ children }: Props) => {
	return (
		<section className="py-10 px-5 gap-10 flex max-h-screen overflow-y-auto ">
			<aside className="overflow-y-scroll flex-shrink-0 fixed min-h-screen w-[180px] left-0 top-0 pl-3 pr-3">
				<Sidebar />
			</aside>
			<div className="flex-grow ml-[180px]">{children}</div>
		</section>
	);
};

export default layout;
