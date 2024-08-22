import type { Metadata } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthieu DEGNY Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <Head>
        <title>{String(metadata.title) ?? "Default Title"}</title>
        <meta
          name="description"
          content={String(metadata.description) ?? "Default Description"}
        />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
