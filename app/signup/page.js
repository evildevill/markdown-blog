import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export const description =
  "A sign up form with an option to sign up with GitHub and a link to login if you already have an account";

const Signup = () => {
  return (
    <div className="pt-56 pb-48">
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