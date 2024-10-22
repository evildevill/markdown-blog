"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        setMessage("Thank you for subscribing!");
      } else {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        setMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-40 xl:pt-48 pb-40 sm:pb-8 md:pb-8 lg:pb-8 xl:pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
            <h1
              className="text-3xl font-semibold tracking-tight sm:text-5xl xl:text-6xl text-gray-800 dark:text-gray-200">
              Sign up to our newsletter
            </h1>

              <p
                className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-300 mx-auto">
                Get the latest updates on tech, programming, and cybersecurity.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2" onSubmit={handleSubmit}>
                <Input
                  className="max-w-lg flex-1 bg-gray-200 text-black border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  className="bg-black text-white dark:bg-white dark:text-black"
                  type="submit">
                  Join Now
                </Button>
              </form>
              {message && <p className="text-sm text-gray-700 dark:text-gray-300">{message}</p>}
              <p className="text-xs text-gray-700 dark:text-gray-300">
                 We respect your privacy. Your email will never be shared.
                <Link
                  className="underline underline-offset-2 text-black dark:text-white"
                  href="/legal/terms"
                  prefetch={false}>
                  Terms
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}