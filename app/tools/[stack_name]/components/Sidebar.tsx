"use client";
import Link from "next/link";
import React from "react";
import { getData } from "@/api/getData";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const Sidebar = (props: Props) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["stack"],
		queryFn: () => getData("/api/stack/javascript"),
	});

	return (
		<>
			<nav className="flex flex-col gap-y-3 pt-10">
				<Link
					href="/tools/tailwind/add-item"
					className="btn !px-1 !py-2 text-sm text-center
				">
					Add Item
				</Link>

				<div className="divider"></div>

				{data?.map((item, index: number) => (
					<Link key={index}
						href={`/tools/tailwind/${item.menu}`}
						className="text-light_gray font-semibold text-sm hover:text-white">
						{item.menu}
					</Link>
				))}
			</nav>
		</>
	);
};

export default Sidebar;
