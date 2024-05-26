import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tej CPA",
  description: "CPA accounting information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-full p-0 w-full m-auto overflow-hidden bg-black ${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
