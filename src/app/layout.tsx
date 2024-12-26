import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/ThemeContext";

export const metadata: Metadata = {
  title: "Krutva Web Blog",
  description:
    "A Web Blog created to share various blogs related to the computer programming",
  verification: {
    google: "XpFSHFij6j7H-bkBaXUU1VNPdxQxHK49ntZDZ5I38CQ",
  },
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
  icons: {
    icon: "/pp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <ThemeProvider>
        <body
          className={cn(
            "min-h-screen min-w-screen overflow-x-hidden antialiased"
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
