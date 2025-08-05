import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
    src: [
        {
            path: "./fonts/WorkSans-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Thin.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-ExtraLight.ttf",
            weight: "100",
            style: "normal",
        },
    ],
    variable: "--font-work-sans",
});

export const metadata: Metadata = {
    title: "Eitan in Art",
    description: "Enjoy the sofrut calligraphy and modern art",
    keywords: "art, artist, portfolio, modern art, calligraphy, calligraffity, paintings, sofrut, Eitan's portfolio, Eitan's art, Eitan's calligraphy",
    authors: [{ name: "Eitan", url: "https://eitanportfolio.netlify.app" }], // FIXME: artelberg
    openGraph: {
        title: "Eitan in Art",
        description: "Enjoy the sofrut calligraphy and modern art",
        url: "https://eitanportfolio.netlify.app", // FIXME: artelberg
        siteName: "Eitan in Art",
        images: [
            {
                url: "https://eitanportfolio.netlify.app/og-image.png", // FIXME: when deployed. og-image.png is already in Public. Maybe upload new from the finished website. Size 1200x630. To check if it works: Facebook Debugger → developers.facebook.com/tools/debug. Twitter Card Validator → cards-dev.twitter.com/validator
                width: 1200,
                height: 630,
                alt: "Eitan in Art",
            },
        ],
        type: "website",
    },
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    robots: "index, follow",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={workSans.variable}>
                {children}
            </body>
        </html>
    );
}