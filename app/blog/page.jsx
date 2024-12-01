import React from "react";
import Card from "../../components/Blog/Card";

const Blogpage = async () => {
	const res = await fetch("http://localhost:3000/api/blog");
	const data = await res.json();

	return (
		<>
		
			<section className="bg-black_blue pt-32 pb-20">
				<div className="container ">
					<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5">
						{data?.map((item) => <Card item={item} />)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Blogpage;
