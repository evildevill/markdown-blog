import { FirewallVu } from "@/components/firewall-vu";
import React from "react";

export const metadata = {
  title: "Firewall Bypass VU - Chrome Extension | Waseem Akram",
  description:
    "Enhance your Virtual University experience with Firewall Bypass VU. Skip lecture restrictions, copy quizzes, and easily manage GDB tasks with this powerful Chrome extension.",
  openGraph: {
    title: "Firewall Bypass VU - Chrome Extension | Waseem Akram",
    description:
      "Unlock seamless access to Virtual University features. Firewall Bypass VU lets you skip lectures, copy quizzes, and manage GDB tasks effortlessly. Your ultimate tool for productivity.",
    url: "https://hackerwasii.com/firewall-bypass-vu",
    siteName: "Firewall Bypass VU – Chrome Extension",
    images: [
      {
        url: "https://hackerwasii.com/images/firewall-bypass-vu.webp",
        width: 1200,
        height: 630,
        alt: "Firewall Bypass VU - Chrome Extension",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firewall Bypass VU - Chrome Extension | Waseem Akram",
    description:
      "Streamline your Virtual University tasks with Firewall Bypass VU. Skip lectures, copy quizzes, and manage GDB tasks with ease using this Chrome extension.",
    image: "https://hackerwasii.com/images/firewall-bypass-vu.webp",
    creator: "@wasii_254",
  },
};

const FirewallBypass = () => {
  return <FirewallVu />;
};

export default FirewallBypass;
