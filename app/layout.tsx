import "./globals.css";
import { Quicksand } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Providers from "../utils/provider"; // Ensure this path is correct
import * as gtag from "../lib/gtag";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta name="google-adsense-account" content="ca-pub-4204160329524961" />
                <meta name="keywords" content="Md Mahir, Mern Stack Developer, Full Stack Developer, JavaScript, React, Node.js, Next.js, Tailwind CSS, InfoCraze" />
                <meta name="robots" content="all" />
                <meta name="author" content="Md Mahir" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:image" content="https://infocraze.vercel.app/images/og-image.jpg" />
                <meta property="og:url" content="https://infocraze.vercel.app" />
                <meta property="og:site_name" content="InfoCraze" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Md Mahir || Mern Stack Developer | InfoCraze" />
                <meta name="twitter:description" content="Md Mahir is a skilled Mern Stack Developer proficient in JavaScript, React, Node.js, Next.js, and more." />
                <meta name="twitter:image" content="https://infocraze.vercel.app/images/og-image.jpg" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                
                {/* Google Ads */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2401442074021157" crossOrigin="anonymous"></script>

                {/* Google Analytics */}
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', { page_path: window.location.pathname });
                    `,
                }} />
            </Head>
            <body className={quicksand.className}>
                <Toaster />
                <Analytics />
                <Header />
                <Providers>{children}</Providers>
                <Footer />
            </body>
        </html>
    );
}