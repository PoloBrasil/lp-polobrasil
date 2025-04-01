import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Polo Brasil Centro Logístico",
  description: "Polo Brasil Centro Logístico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${raleway.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
