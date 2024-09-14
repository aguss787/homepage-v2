import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agus Sentosa Hermawan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative font-mono"}>
        <div className="flex flex-col min-h-screen items-center">
          <Header />
          <div className="grow flex flex-row pb-footer min-h-full min-w-7xl max-w-7xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
