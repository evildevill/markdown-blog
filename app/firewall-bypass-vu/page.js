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
  additionalMetaTags: [
    {
      name: "author",
      content: "Waseem Akram",
    },
    {
      name: "keywords",
      content:
        "Firewall Bypass VU, Chrome Extension, Virtual University, VU, VULMS, VU LMS, Virtual University of Pakistan, VU Chrome Extension, VU LMS Chrome Extension, VU LMS Bypass, VU LMS Quiz Bypass, VU LMS GDB Bypass, VU LMS Lecture Bypass, VU LMS Lecture Skip, VU LMS Quiz Copy, VU LMS GDB Copy, VU LMS GDB Manager, VU LMS GDB Task Manager, VU LMS Quiz Manager, VU LMS Quiz Task Manager, VU LMS Lecture Manager, VU LMS Lecture Task Manager",
    },
  ],
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Firewall Bypass VU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Firewall Bypass VU is a Chrome extension that enhances your Virtual University experience. It allows you to skip lecture restrictions, copy quizzes, and easily manage GDB tasks.",
        },
      },
      {
        "@type": "Question",
        name: "How to install Firewall Bypass VU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can install Firewall Bypass VU from the Chrome Web Store. Simply search for 'Firewall Bypass VU' and click on the 'Add to Chrome' button to install the extension.",
        },
      },
      {
        "@type": "Question",
        name: "Is Firewall Bypass VU safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Firewall Bypass VU is safe to use. The extension does not collect any personal information and is designed to enhance your productivity on the Virtual University platform.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Firewall Bypass VU on other websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Firewall Bypass VU is specifically designed for the Virtual University platform. It will not work on other websites.",
        },
      },
      {
        "@type": "Question",
        name: "How can I report an issue with Firewall Bypass VU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you encounter any issues with Firewall Bypass VU, you can report them by sending an email to hello@hackewasii.com.",
        },
      },
    ],
  },
};

const FirewallBypass = () => {
  return <FirewallVu />;
};

export default FirewallBypass;
