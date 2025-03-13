mport "./globals.css";
import { Quicksand } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import Providers from "../utilis/provider";
import * as gtag from "../lib/gtag";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
        title: "Md Mahir || Mern Stack Developer | InfoCraze",
        description:
                "Hi, This is Md Mahir. I am a Mern Stack Developer with expertise in JavaScript, React, Node, Next.js, Tailwind CSS, MongoDB, Express, Mongoose, GraphQL, Redux Toolkit, RTK Query, and React Query.",
        keywords: "Md Mahir, Mern Stack Developer, React, Node, JavaScript, Full Stack Developer, InfoCraze, Front End Developer, JavaScript Developer",
        openGraph: {
                title: "Md Mahir || Mern Stack Developer | InfoCraze",
                description:
                        "Md Mahir is a skilled Mern Stack Developer proficient in JavaScript, React, Node.js, Next.js, and more.",
                url: "https://infocraze.vercel.app",
                site_name: "InfoCraze",
                images: [
                        {
                                url: "https://infocraze.vercel.app/images/og-image.jpg",  // Replace with an actual image URL
                                width: 1200,
                                height: 630,
                                alt: "Md Mahir - Mern Stack Developer",
                        },
                ],
        },
        twitter: {
                card: "summary_large_image",
                title: "Md Mahir || Mern Stack Developer | InfoCraze",
                description:
                        "Md Mahir is a skilled Mern Stack Developer proficient in JavaScript, React, Node.js, Next.js, and more.",
                image: "https://infocraze.vercel.app/images/og-image.jpg", // Replace with an actual image URL
        },
};

export default function RootLayout({ children }) {
        return (
                <html lang="en">
                        <head>
                                <meta
                                        name="google-adsense-account"
                                        content="ca-pub-4204160329524961"
                                ></meta>
                                <meta
                                        name="keywords"
                                        content="Md Mahir, Mern Stack Developer, Full Stack Developer, JavaScript, React, Node.js, Next.js, Tailwind CSS, InfoCraze"
                                />
                                <meta name="robots" content="all" />
                                <meta name="author" content="Md Mahir" />
                                <meta name="theme-color" content="#000000" />
                                <meta
                                        property="og:image"
                                        content="https://infocraze.vercel.app/images/og-image.jpg" // Replace with an actual image URL
                                />
                                <meta property="og:url" content="https://infocraze.vercel.app" />
                                <meta property="og:site_name" content="InfoCraze" />
                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:title" content="Md Mahir || Mern Stack Developer | InfoCraze" />
                                <meta name="twitter:description" content="Md Mahir is a skilled Mern Stack Developer proficient in JavaScript, React, Node.js, Next.js, and more." />
                                <meta
                                        name="twitter:image"
                                        content="https://infocraze.vercel.app/images/og-image.jpg" // Replace with an actual image URL
                                />
                                <link
                                        rel="shortcut icon"
                                        href="/favicon.ico"
                                        type="image/x-icon"
                                />
                                <script
                                        async
                                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2401442074021157"
                                        crossOrigin="anonymous"
                                ></script>

                                <script
                                        async
                                        src="https://www.googletagmanager.com/gtag/js?id=G-85Y2WNN21R"
                                ></script>
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
                                <Header />
                                <Providers>{children}</Providers>
                                <Footer />
                        </body>
                </html>
        );
}