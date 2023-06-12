"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import SunEditorCore from "suneditor/src/lib/core";

const SunEditor = dynamic(() => import("suneditor-react"), {
	ssr: false,
});

export default function TextEditor({ contents, setContents}) {
	// const [contents, setContents] = useState<string>("");
	const editor = useRef<SunEditorCore>();

	const getSunEditorInstance = (sunEditor) => {
		editor.current = sunEditor;
	};

	const handleChange = (content: string) => {
		setContents(content); // Update the contents state as you type
	};

	return (
		<SunEditor
			setContents={contents} // Set the initial contents from state
			setDefaultStyle="font-family: Roboto; font-size: 14px;"
			setOptions={{
				charCounter: true,
				buttonList: [
					["undo", "redo"],
					["fontSize", "font", "formatBlock"],
					["bold", "underline", "italic", "strike"],
					["fontColor", "hiliteColor"],
					["align", "list", "lineHeight"],
					["outdent", "indent"],
					["link"],
					["image", "video"],
					["codeView", "removeFormat"],
					["subscript", "superscript"],
					["table", "fullScreen"],
					["preview"],
					["save", "print"],
				],
			}}
			getSunEditorInstance={getSunEditorInstance}
			onChange={handleChange} // Call handleChange on editor content change
		/>
	);
}
