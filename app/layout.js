import Footer from "../components/Footer";
import "./globals.css";
import { Quicksand } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
	title: "Md Mahir || Mern Stack Developer",
	description:
		"Hi, This is Md Mahir. I am a Mern Stack Developer. Good at JavaScript, React js, Node js, Next js, Tailwind css, MongoDB, Express, Mongoose, GraphQL, Redux toolkit, RTK Query, React Query",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
				/>
			</head>
			<body>
				<Toaster />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
