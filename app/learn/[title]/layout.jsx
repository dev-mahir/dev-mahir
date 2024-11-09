import Link from "next/link";
import { vanila_css_menu } from "../../../data/learn/vanila-css";
const Layout = ({ children }) => {
	return (
		<section className="flex gap-5">
			<div className="w-[170px] bg-gray-900 h-[78vh] overflow-y-auto">
				<nav className="flex flex-col gap-y-1 px-4">
					<Link
						href=""
						className="text-light_gray font-semibold duration-300 hover:text-light_red">
						Intro
					</Link>
					{vanila_css_menu.map((menu) => (
						<Link
							key={menu.name}
							href={`/learn/vanila-css/${menu.link}`}
							className="text-light_gray font-semibold duration-300 hover:text-light_red">
							{menu.name}
						</Link>
					))}
				</nav>
			</div>
			<div className="w-full">{children}</div>
		</section>
	);
};

export default Layout;
