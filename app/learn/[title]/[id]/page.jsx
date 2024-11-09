"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CodePreview from "../../../../components/CodePreview/CodePreview";
import { vanila_css } from "../../../../data/learn/vanila-css";
import { set } from "mongoose";

const LearnTopicPage = () => {
	const pathname = usePathname();

	const path = pathname.split("/")[3];

	const [code, setCode] = useState({
		title: "",
		html: `<h1>Hello, World!</h1>\n<p>This is a paragraph.</p>`,
		css: `<style>
	h2 {
		font-size: 32px;
	}
</style>`,
	});

	const data = vanila_css?.filter((item) => item.src == path);

	useEffect(() => {
		if (data) {
			data.map((item) => {
				setCode(() => item);
			});
		}
	}, [code, setCode]);

	return (
		<>
			<CodePreview
				htmlCode={code.html}
				cssCode={code.css}
				title={code.title}
			/>
		</>
	);
};

export default LearnTopicPage;
