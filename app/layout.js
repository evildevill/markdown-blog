import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { FooterBar } from "@/components/footer-bar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Waseem Akram - Blog",
  description: "Portfolio and blog",
  openGraph: {
    title: "Waseem Akram - Blog",
    description: "Portfolio and blog",
    url: "https://hackerwasii.com",
    site_name: "Waseem Akram Blog",
    images: [
      {
        url: "/cover.webp",
        width: 1200,
        height: 630,
        alt: "Waseem Akram Blog Image",
        type: "image/webp",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wasii_254",
    title: "Waseem Akram - Blog",
    description: "Portfolio and blog",
    images: ["/cover.webp"],
    type: "image/webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
          <Analytics />
          <SpeedInsights />
          <FooterBar />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-0PCVFG8BNK" />
      </body>
    </html>
  );
}
