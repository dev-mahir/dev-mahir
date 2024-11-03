"use client";
import React from "react";
import "./tools.Module.css";
import Sidebar from "./components/Sidebar";
import { getData } from "@/api/getData";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type Props = {
	children: React.ReactNode
};

const Page = ({ children }: Props) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["stack"],
		queryFn: () => getData("/api/stack/javascript"),
	});

	
	return (
		<section className="py-10 px-5 gap-10 flex max-h-screen overflow-y-auto ">
			<div className="flex-grow ml-[180px]">
				<div>
					{data?.map((item, index : number) => (
						<div key={index}
							id={`/tools/tailwind/#${item.menu}`}
							className="border-b border-b-gray-500 pt-3 pb-5">
							<h2 className="text-lg text-light_gray capitalize border-b border-b-gray-700">
								{item.submenu}
							</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Omnis veritatis laudantium eos esse
							repellendus magnam quaerat sit magni necessitatibus
							incidunt quam molestiae excepturi dolorum quas
							praesentium aut ut, blanditiis ab corrupti sapiente
							qui quae officiis reiciendis assumenda. Aperiam
							tempore m magnam ducimus. Similique explicabo ex
							accusantium tempore nihil aspernatur obcaecati et
							iusto. Quae ad vel quia velit est qui expedita,
							minus dolores sed reiciendis fugiat aspernatur
							beatae possimus obcaecati fuga omnis quisquam
							dolorem molestias nulla? Est totam odio aperiam
							recusandae quam! Quis asperiores odio, asperiores
							nihil, quasi perspiciatis dolor porro commodi
							maiores nam repellat excepturi rerum quis! corrupti
							sapiente qui quae officiis reiciendis assumenda.
							Aperiam tempore m magnam ducimus. Similique
							explicabo ex accusantium tempore nihil aspernatur
							obcaecati et iusto. Quae ad vel quia velit est qui
							expedita, minus dolores sed reiciendis fugiat
							aspernatur beatae possimus obcaecati fuga omnis
							quisquam dolorem molestias nulla? Est totam odio
							aperiam recusandae quam! Quis asperiores odio,
							asperiores nihil, quasi perspiciatis dolor porro
							commodi maiores nam repellat excepturi rerum quis!
							corrupti sapiente qui quae officiis reiciendis
							assumenda. Aperiam tempore m magnam ducimus.
							Similique explicabo ex accusantium tempore nihil
							aspernatur obcaecati et iusto. Quae ad vel quia
							velit est qui expedita, minus dolores sed reiciendis
							fugiat aspernatur beatae possimus obcaecati fuga
							omnis quisquam dolorem molestias nulla? Est totam
							odio aperiam recusandae quam! Quis asperiores odio,
							asperiores nihil, quasi perspiciatis dolor porro
							commodi maiores nam repellat excepturi rerum quis!
							corrupti sapiente qui quae officiis reiciendis
							assumenda. Aperiam tempore m magnam ducimus.
							Similique explicabo ex accusantium tempore nihil
							aspernatur obcaecati et iusto. Quae ad vel quia
							velit est qui expedita, minus dolores sed reiciendis
							fugiat aspernatur beatae possimus obcaecati fuga
							omnis quisquam dolorem molestias nulla? Est totam
							odio aperiam recusandae quam! Quis asperiores odio,
							asperiores nihil, quasi perspiciatis dolor porro
							commodi maiores nam repellat excepturi rerum quis!
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Page;
