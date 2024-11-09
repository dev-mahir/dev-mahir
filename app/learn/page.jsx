import Link from "next/link";
import { learnMenuMain } from "../../constants/index";


const LearnPage = () => {
	return (
		<>
			<section className="py-10">
				<div className="container">
					<div className="flex flex-wrap justify-start gap-3">
						{learnMenuMain.map((menu) => (
                            <Link 
								key={menu.link} 
								href={`/learn/${menu.link}`}
								className="flex-1 min-w-[200px] text-center text-light_gray font-semibold bg-dark_blue px-12 py-5 rounded-sm hover:text-light_red border border-dark_blue hover:bg-black hover:border-light_red duration-300">
								{menu.name}
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default LearnPage;
