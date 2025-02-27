import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

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
        icon: [{ url: "/favicon.svg" }],
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
                    <Header />
                    <main className="md:px-32 px-8 mx-auto">
                        {children}
                        <Analytics />
                    </main>
                    <Footer className="flex py-4 items-center md:px-32 px-8 mx-auto" />
                </ThemeProvider>
            </body>
        </html>
    );
}
