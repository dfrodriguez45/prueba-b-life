import type { Metadata } from "next";
import { Montserrat, Prompt } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Electronic Ecommerce Landing Page",
  description: "Prueba técnica para B life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.variable} ${prompt.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
