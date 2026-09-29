import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

import { SmoothScroll } from "@/components/smooth-scroll";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Frontline Pools",
    description:
        "Pool remodeling and renovation throughout Tampa Bay.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${archivo.variable} ${manrope.variable} antialiased`}
        >
        <SmoothScroll>{children}</SmoothScroll>
        </body>
        </html>
    );
}