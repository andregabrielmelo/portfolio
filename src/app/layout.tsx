import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/app/components/theme-provider";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "André Melo",
    description: "Portfolio of projects, skills and about me",
    icons: {
        icon: "/favicon.svg", // Default favicon
        apple: [
            { url: "/favicons/apple-icon-192x192.png", sizes: "192x192" },
            { url: "/favicons/apple-icon-512x512.png", sizes: "512x512" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="dark overscroll-contain scroll-smooth"
            suppressHydrationWarning
        >
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header className="flex justify-between items-center p-8 sticky top-0 transition-all backdrop-blur-xs bg-gradient-to-b from-(--color-background) via-(--color-background) via-35% to-(--color-background)/5" />
                    <main className="md:px-32 px-8">
                        {children}
                        <Analytics />
                        <SpeedInsights />
                    </main>
                    <Footer className="flex py-4 items-center md:px-32 px-8 mx-auto" />
                </ThemeProvider>
            </body>
        </html>
    );
}
