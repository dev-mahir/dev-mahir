"use client";
import { useEffect } from "react";

const Tailwind = () => {
	useEffect(() => {
		// Load Google AdSense script only once
		const script = document.createElement("script");
		script.src =
			"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4204160329524961";
		script.async = true;
		script.crossOrigin = "anonymous";
		document.body.appendChild(script);

		// Initialize AdSense after loading the script
		script.onload = () => {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		};

		// Clean up the script if the component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<div className="ads-container">
				<ins
					className="adsbygoogle"
					style={{ display: "block" }}
					data-ad-client="ca-pub-4204160329524961"
					data-ad-slot="3514855206"
					data-ad-format="auto"
					data-full-width-responsive="true"></ins>
			</div>
			<div className="text-gray-400">
				Get started with Tailwind CSS! Tailwind CSS works by scanning
				all of your HTML files, JavaScript components, and other
				templates for class names, generating the corresponding styles,
				and writing them to a static CSS file. Its fast, flexible, and
				reliable — with zero runtime.
			</div>
		</>
	);
};

export default Tailwind;
