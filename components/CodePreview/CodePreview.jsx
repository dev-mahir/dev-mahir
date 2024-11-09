"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

const HtmlCodeHighlighter = ({ code }) => {
	return (
		<SyntaxHighlighter language="html" style={darcula}>
			{code}
		</SyntaxHighlighter>
	);
};

const CodePreview = ({ htmlCode, cssCode, title }) => {
	const createPreviewContent = () => `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				${cssCode}
			</head>
			<body>
				${htmlCode}
			</body>
		</html>
	`;

	return (
		<section>
			<h2 className="text-light_gray font-bold text-xl underline pb-2">
				{title}:
			</h2>
			<div className="flex gap-5 pr-5">
				<div className="max-w-[300px]  ">
					<h3 className="text-light_gray font-semibold ">
						HTML Code
					</h3>
					<HtmlCodeHighlighter code={htmlCode} />

					<h3 className="text-light_gray font-semibold ">CSS Code</h3>
					<SyntaxHighlighter
						language="html"
						style={darcula}
						customStyle={{ borderRadius: "8px", padding: "20px" }}>
						{cssCode}
					</SyntaxHighlighter>
				</div>

				<div className="preview-container flex-grow">
					<h3 className=" text-light_gray font-semibold pb-2">
						Preview
					</h3>
					<iframe
						title="HTML Preview"
						srcDoc={createPreviewContent()}
						sandbox="allow-scripts"
						style={{
							width: "100%",
							height: "400px",
							border: "1px solid #ccc",
							borderRadius: "8px",
							background: "#fff",
						}}></iframe>
				</div>
			</div>
		</section>
	);
};

export default CodePreview;
