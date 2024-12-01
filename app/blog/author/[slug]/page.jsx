import Image from "next/image";
import React from "react";
import { FaDotCircle } from "react-icons/fa";
import Tab from "../../../../components/Tab/Tab"

const Author = () => {
	return (
		<>
			<section className="py-20">
				<div className="container grid grid-cols-5 gap-10 divide-x">
					<div className="col-span-3">
						<div className="">
							<Image
								height={500}
								width={500}
								className="w-full  h-[300px] object-cover object-top"
								src="/images/author/mdmahir.jpg"
								alt="Md Mahir"
							/>
							<div className="flex justify-between px-5 -mt-10">
								<p className="font-bold text-xl text-white">
									Dev Mahir
								</p>
								<button>
									<FaDotCircle />
								</button>
							</div>
						</div>

						<div className="mt-5 overflow-hidden">
							<Tab />
						</div>
					</div>
					<div className="col-span-2 pl-7">
						<Image
							height={100}
							width={100}
							className="w-20  h-20 object-cover rounded-full"
							src="/images/author/mdmahir.jpg"
							alt="Md Mahir"
						/>
						<p className="font-semibold mt-3">Dev Mahir</p>
						<p className="text-sm font-medium ">
							Hi, I'm a full stack developer.I'm working as a full
							stack developer about 3 years.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Author;
