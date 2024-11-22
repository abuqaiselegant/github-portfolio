import "./globals.css";
import { cn } from "@/lib/utils";
import { geistSans, geistMono } from "./fonts/fonts";
import type { Metadata } from "next";
import { Providers } from './providers'; // Add this import

export const metadata: Metadata = {
  title: "Abu Qais | Data Science Professional",
  description:
    "Data Science Professional with expertise in machine learning, automation, and software development",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Software Development",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased min-h-screen bg-background",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}