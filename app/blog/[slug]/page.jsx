import Image from "next/image";
import Link from "next/link";
import { FaTag, FaUser } from "react-icons/fa";

const SingleBlogPage = async ({ params }) => {
	const slug = params.slug; 

	const res = await fetch(`http://localhost:3000/api/blog?slug=${slug}`, {
		cache: "no-store", 
	});
	const data = await res.json();

	return (
		<>
			<div className="bg-white py-10">
				<div className="container">
					<div className="w-[300px] relative shadow-md shadow-blue-200 pt-2 px-2 pb-1 rounded-md">
						<Image
							src={data.image}
							alt=""
							width={500}
							height={500}
							className="object-contain"
						/>
						<div className="flex justify-between py-2">
							<div className="flex items-center gap-1">
								<FaUser className="text-light_gray text-sm" />
								<Link
									href="#"
									className="text-light_gray font-medium">
									{data.author}
								</Link>
							</div>
							<div className="flex items-center gap-1">
								<FaTag className="text-light_gray text-sm" />
								<p className="text-light_gray font-medium">
									{data.tag}
								</p>
							</div>
						</div>
					</div>
					<p className="mt-8">{data.content}</p>
				</div>
			</div>
		</>
	);
};

export default SingleBlogPage;
