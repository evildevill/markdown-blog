import React from "react";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export const metadata = {
  title: "Sign Up - Waseem Akram",
  description: "Join the community! Sign up now to get access to exclusive content, updates, and insights on coding, cybersecurity, and tech projects.",
  openGraph: {
    title: "Sign Up - Waseem Akram",
    description: "Join the community! Sign up now to get access to exclusive content, updates, and insights on coding, cybersecurity, and tech projects.",
    url: "https://hackerwasii.com/signup",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    // images: [
    //   {
    //     url: "https://hackerwasii.com/images/signup-banner.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Sign Up with Waseem Akram",
    //   }
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up - Waseem Akram",
    description: "Join the community! Sign up now to get access to exclusive content, updates, and insights on coding, cybersecurity, and tech projects.",
    image: "https://hackerwasii.com/images/signup-banner.jpg",
    creator: "@wasii_254",
  },
};

const Signup = () => {
  return (
    <div className="pt-56 pb-56">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full">
             <RegisterLink postLoginRedirectURL="/dashboard">Sign up</RegisterLink>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;