import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ashura Web Blog",
  description:
    "A Web Blog created to share various blogs related to the computer programming",
  authors: [
    {
      name: "Ashura Majestic",
      url: "https://github.com/AshuraMajestic",
    },
    {
      name: "Krutva Patel",
      url: "https://www.linkedin.com/in/krutva-patel-0a9498257",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
