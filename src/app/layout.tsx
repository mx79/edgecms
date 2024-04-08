import React from "react";
import './globals.css';
import {Inter as FontSans} from "next/font/google"
import {cn} from "@/lib/utils"
import Providers from "@/app/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const runtime = "edge";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={cn(
      "min-h-screen bg-background font-sans antialiased overflow-hidden",
      fontSans.variable
    )}>
    <Providers>
      <div className="flex flex-col h-full">
        {children}
      </div>
    </Providers>
    </body>
    </html>
  );
};
