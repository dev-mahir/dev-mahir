"use client";

import { usePathname } from "next/navigation";
import Sidebar from "../../components/Admin/Sidebar";

function Layout({ children }) {
	const router = usePathname();

	return (
		<div className="flex gap-10">
			<div className="w-[200px] bg-gray-900 h-screen">
				<Sidebar />
			</div>
			<div className="py-10">{children}</div>
		</div>
	);
}

export default Layout;
