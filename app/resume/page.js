import React from "react";
import { ResumePage } from "@/components/resume-page";

export const metadata = {
  title: "Resume - Waseem Akram",
  description:
    "Hi, I am Information security enthusiast with industry level certifications and a strong interest in penetration testing and offensive security.",
  openGraph: {
    title: "Resume - Waseem Akram",
    description:
      "Hi, I am Information security enthusiast with industry level certifications and a strong interest in penetration testing and offensive security.",
    url: "https://hackerwasii.com/resume",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    // images: [
    //   {
    //     url: "https://hackerwasii.com/images/resume-banner.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Resume - Waseem Akram"
    //   }
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Waseem Akram",
    description:
      "I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.",
    // image: "https://hackerwasii.com/images/resume-banner.jpg",
    creator: "@wasii_254",
  },
};

const Resume = () => {
  return <ResumePage />;
};

export default Resume;
