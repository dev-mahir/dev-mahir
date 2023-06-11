import Footer from "@/components/Footer";
import "./globals.css";
import { Quicksand } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
	title: "Crako Bio || Next js Single page portfolio",
	description:
		"Crako Bio next js single page portfolio. Developed by Crako Tech.",
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
