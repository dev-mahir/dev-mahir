"use client";

import { useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";

const LearnTopicPage = () => {
	const monaco = useMonaco();
	const [htmlCode, setHtmlCode] = useState(
		"<h2>Write your html code here</h2>"
	);
	const [cssCode, setCssCode] = useState("h2 { font-size: 32px; }");

	useEffect(() => {
		if (monaco) {
			// Enable HTML features
			monaco.languages.html.htmlDefaults.setOptions({
				validate: true,
				suggest: {
					html5: true,
					angular1: true,
					ionic: true,
				},
			});
		}
	}, [monaco]);

	// Combine HTML and CSS for the preview
	const createPreviewContent = () => `
        <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>${htmlCode}</body>
        </html>
    `;

	return (
		<section className="  flex gap-5 pr-5 ">
			<div className="min-w-[300px]">
				<h3>HTML Code</h3>
				<Editor
					height="200px"
					defaultLanguage="html"
					value={htmlCode}
					onChange={(value) => setHtmlCode(value || "")}
				/>
				<h3>CSS Code</h3>
				<Editor
					height="200px"
					defaultLanguage="css"
					value={cssCode}
					onChange={(value) => setCssCode(value || "")}
				/>
			</div>
			<div className="preview-container flex-grow">
				<h3>Preview</h3>
				<iframe
					title="Preview"
					srcDoc={createPreviewContent()}
					sandbox="allow-scripts"
					style={{
						width: "100%",
						height: "400px",
						border: "1px solid #eee",
					}}
				/>
			</div>
		</section>
	);
};

export default LearnTopicPage;
