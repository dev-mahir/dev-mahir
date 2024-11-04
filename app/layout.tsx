import Footer from "../components/Footer";
import "./globals.css";
import { Quicksand } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import Header from "../components/Header/Header";
import Providers from "../utilis/provider";
import * as gtag from "../lib/gtag";
import { Analytics } from "@vercel/analytics/react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Md Mahir || Mern Stack Developer",
	description:
		"Hi, This is Md Mahir. I am a Mern Stack Developer. Good at JavaScript, React js, Node js, Next js, Tailwind css, MongoDB, Express, Mongoose, GraphQL, Redux toolkit, RTK Query, React Query",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4204160329524961"
					crossOrigin="anonymous"></script>
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
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-85Y2WNN21R"></script>
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
				<Analytics />

				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
