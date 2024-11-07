import { AboutPage } from "@/components/about-page";
import React from "react";

export const metadata = {
  title: "About Me - Waseem Akram",
  description: "I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.",
  openGraph: {
    title: "About Me - Waseem Akram",
    description: "I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.",
    url: "https://hackerwasii.com/about",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    // images: [
    //   {
    //     url: "https://hackerwasii.com/images/about-banner.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "About - Waseem Akram"
    //   }
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me - Waseem Akram",
    description: "I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.",
    // image: "https://hackerwasii.com/images/about-banner.jpg",
    creator: "@wasii_254",
  },
};

const About = () => {
  return (
    <section>
      <AboutPage />
    </section>
  );
};

export default About;
