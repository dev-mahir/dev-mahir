"use client";
import Footer from "../components/Footer";
import "./globals.css";
import { Quicksand } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";
import * as gtag from "../lib/gtag";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";
import Header from "../components/Header/Header";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Md Mahir || Mern Stack Developer",
	description:
		"Hi, This is Md Mahir. I am a Mern Stack Developer. Good at JavaScript, React js, Node js, Next js, Tailwind css, MongoDB, Express, Mongoose, GraphQL, Redux toolkit, RTK Query, React Query",
};

export default function RootLayout({ children }) {
	const queryClient = new QueryClient();
	return (
		<html lang="en">
			<head>
				<meta
					name="keywords"
					content="md mahir, mahir ,md mahir, dev mahir, mern stack developer, front end developer, full stack developer"
				/>
				<meta name="robots" content="all" />
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
				/>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2401442074021157"
					crossOrigin="anonymous"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
					}}
				/>
			</head>
			<body>
				<Toaster />
				<QueryClientProvider client={queryClient}>
					<Header />
					{children}
					<Footer />
				</QueryClientProvider>
			</body>
		</html>
	);
}
