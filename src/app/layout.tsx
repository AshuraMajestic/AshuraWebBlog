import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/ThemeContext";

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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z3668DY1B5"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3668DY1B5');
          `}
        </script>
      </head>
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
