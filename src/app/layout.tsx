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

        {/* video */}
        <meta
          property="og:title"
          content="Stock Market Dashboard Demo - Matthieu Degny Portfolio"
        />
        <meta
          property="og:description"
          content="Watch a video demonstration of my full-stack Stock Market Dashboard application, featuring dynamic charts and investment tracking tools."
        />
        <meta
          property="og:image"
          content="https://matthieudegnyportfolio.com/assets/thumbnail.jpg"
        />
        <meta property="og:type" content="video.other" />
        <meta
          property="og:video"
          content="https://matthieudegnyportfolio.com/assets/MyDashBoardVideo.mp4"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
