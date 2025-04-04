import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from 'react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDb Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          {/* Wrap Navbar and SearchBox in Suspense */}
          <Suspense fallback={<div className="h-10 bg-gray-200 animate-pulse"></div>}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<div className="h-10 bg-gray-200 animate-pulse"></div>}>
            <SearchBox />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}