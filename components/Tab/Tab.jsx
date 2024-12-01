"use client";
import React from "react";

const Tab = () => {

	const handleTabMenu = (id) => {
		const ele = document?.getElementById(id);
		const openEle = document?.querySelector(".open");
		openEle && openEle?.classList.remove("open");
        ele.classList.add("open");
	};

	return (
		<div>
			<div
				className="border-b border-gray-300
            ">
				<nav className="flex gap-x-5">
					<button
						onClick={() => handleTabMenu("post")}
						className="font-medium text-primary text-lg hover:text-primary duration-300">
						All Posts
					</button>
					<button
						onClick={() => handleTabMenu("setting")}
						className="font-medium text-lg hover:text-primary duration-300">
						Settings
					</button>
				</nav>
			</div>
			<div>
				<div id="post" className="open">
					<p>All posts</p>
				</div>
				<div id="setting" className="translate-x-full">
					<p>Settings</p>
				</div>
			</div>

			<style jsx>
				{`
					.open {
						transform: translate(0);
					}
				`}
			</style>
		</div>
	);
};

export default Tab;
