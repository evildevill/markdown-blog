import AdUnit from '@/components/AdUnit'
import { BlogPage } from '@/components/blog-page'
import React from 'react'

export const metadata = {
  title: "Cybersecurity & Tech Insights Blog – Waseem Akram",
  description: "Explore Waseem Akram's blog for expert insights on cybersecurity, programming, and tech trends. Get tutorials, tips, and industry updates to advance your skills in the digital world.",
  openGraph: {
    title: "Cybersecurity & Tech Insights Blog – Waseem Akram",
    description: "Explore Waseem Akram's blog for expert insights on cybersecurity, programming, and tech trends. Get tutorials, tips, and industry updates to advance your skills in the digital world.",
    url: "https://hackerwasii.com/blog",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    // images: [
    //   {
    //     url: "https://hackerwasii.com/images/blog-banner.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Blog - Waseem Akram"
    //   }
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity & Tech Insights Blog – Waseem Akram",
    description: "Explore Waseem Akram's blog for expert insights on cybersecurity, programming, and tech trends. Get tutorials, tips, and industry updates to advance your skills in the digital world.",
    // image: "https://hackerwasii.com/images/blog-banner.jpg",
    creator: "@wasii_254",
  },
};

const Blog = () => {
  return (
    <section>
        <AdUnit />
        <BlogPage />
    </section>
  )
}

export default Blog