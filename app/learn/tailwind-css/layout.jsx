import Link from "next/link";

const TailwindLayout = ({ children }) => {
	return (
		<>
			<section className="mt-[74px] flex px-5 h-[77vh]">
				<div className="w-[120px] flex-shrink-0 border-r border-gray-500">
					<nav className="flex flex-col gap-y-1">
						<Link
							href="/learn/tailwind-css"
							className="text-gray-400 font-medium">
							Intro
						</Link>
						<Link href="/" className="text-gray-400 font-medium">
							Intro
						</Link>
					</nav>
				</div>
				<div className=" px-5">{children}</div>
			</section>
		</>
	);
};

export default TailwindLayout;
