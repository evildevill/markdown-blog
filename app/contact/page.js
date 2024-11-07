import React from "react";
import { ContactMe } from "@/components/contact-me";

export const metadata = {
  title: "Contact Me - Waseem Akram",
  description: "Have questions or want to collaborate? Reach out to me for inquiries about coding, cybersecurity, or tech projects. Let’s connect and discuss ideas!",
  openGraph: {
    title: "Contact Me - Waseem Akram",
    description: "Have questions or want to collaborate? Reach out to me for inquiries about coding, cybersecurity, or tech projects. Let’s connect and discuss ideas!",
    url: "https://hackerwasii.com/contact",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    // images: [
    //   {
    //     url: "https://hackerwasii.com/images/contact-banner.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Contact - Waseem Akram"
    //   }
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me - Waseem Akram",
    description: "Have questions or want to collaborate? Reach out to me for inquiries about coding, cybersecurity, or tech projects. Let’s connect and discuss ideas!",
    // image: "https://hackerwasii.com/images/contact-banner.jpg",
    creator: "@wasii_254",
  },
};

const Contact = () => {
  return <ContactMe />;
};

export default Contact;
