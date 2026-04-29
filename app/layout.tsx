import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dam-It-Dams | Portable Water-Filled Cofferdams",
  description:
    "The proven solution for construction, flood control, dewatering, and emergency water diversion. Water solutions since 1928.",
  keywords: [
    "cofferdams",
    "water control",
    "flood control",
    "dewatering",
    "construction",
    "portable dams",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-dark`}>
      <body>{children}</body>
    </html>
  );
}
