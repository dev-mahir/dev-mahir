"use client";
import { useState } from "react";
import CodePreview from "../../../components/CodePreview/CodePreview";

const LearnTopicPage = () => {
	const [htmlCode, setHtmlCode] = useState(
		`<h1>Hello, World!</h1>\n<p>This is a paragraph.</p>`
	);
	const [cssCode, setCssCode] = useState(`
<style>
	h2 {
		font-size: 32px;
	}
</style>`);

	return (
		<>
			<CodePreview htmlCode={htmlCode} cssCode={cssCode} />
		</>
	);
};

export default LearnTopicPage;
