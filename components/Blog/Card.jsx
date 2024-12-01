import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTag, FaUser } from "react-icons/fa";

const Card = ({ item }) => {
	console.log(item);

	return (
		<div className="card bg-dark_blue group " key={item.id}>
			<div className="h-[200px] overflow-hidden ">
				<Link href={`/blog/${item.src}`}>
					<Image
						src={item.image}
						alt={item.title}
						width={500}
						height={500}
						className="w-full rounded-md object-cover group-hover:scale-110 duration-300"
					/>
				</Link>
			</div>
			<div className="px-2 py-1">
				<div className="flex justify-between">
					<div className="flex items-center gap-1">
						<FaUser className="text-light_gray text-sm" />
						<Link href={`/blog/author/${item.author}`}>
							<p className="text-light_gray font-medium">
								{item.author}
							</p>
						</Link>
					</div>
					<div className="flex items-center gap-1">
						<FaTag className="text-light_gray text-sm" />
						<p className="text-light_gray font-medium">
							{item.tag}
						</p>
					</div>
				</div>

				<Link href={`/blog/${item.src}`}>
					<h2 className=" font-semibold text-lg text-light_gray leading-6 pb-2 hover:text-primary ">
						{item.title}
					</h2>
				</Link>
				<p className="line-clamp-4 text-light_gray">{item.content}</p>
			</div>
		</div>
	);
};

export default Card;
