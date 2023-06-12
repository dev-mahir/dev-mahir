import React from "react";
import "./tools.Module.css";
import Sidebar from "./components/Sidebar";

type Props = {};

const Layout = ({ children }: Props) => {
	return (
		<div className="flex">
			<aside>
				<Sidebar />
			</aside>
			<div>{children}</div>
		</div>
	);
};

export default Layout;
