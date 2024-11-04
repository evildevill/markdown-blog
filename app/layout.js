import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { FooterBar } from "@/components/footer-bar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

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
  title: "Waseem Akram – Researcher, Pentester, Dev",
  description: "I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.",
  openGraph: {
    title: "Waseem Akram – Researcher, Pentester, Dev",
    description: "I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.",
    url: "https://hackerwasii.com",
    site_name: "Waseem Akram – Researcher, Pentester, Dev",
    images: [
      {
        url: "/cover.webp",
        width: 1200,
        height: 630,
        alt: "Waseem Akram – Researcher, Pentester, Dev Image",
        type: "image/webp",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wasii_254",
    title: "Waseem Akram – Researcher, Pentester, Dev",
    description: "I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.",
    images: ["/cover.webp"],
    type: "image/webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9670252621494000"
      crossOrigin="anonymous"
    ></Script>
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
