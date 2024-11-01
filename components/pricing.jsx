import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  return (
    <section
      className="min-h-screen w-full py-12 bg-background dark:bg-background flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-foreground dark:text-card-foreground">Support Me on Patreon</h2>
          <p className="text-muted-foreground">Choose a plan to support my work on cybersecurity and tech content</p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div
            className="flex flex-col p-6 bg-card shadow-lg rounded-lg dark:bg-card-dark justify-between border border-muted">
            <div>
              <h3
                className="text-2xl font-bold text-center text-foreground dark:text-card-foreground">You&apos;re Great!</h3>
              <div className="mt-4 text-center text-muted-foreground">
                <span className="text-4xl font-bold">$5</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Access to Patreon-only posts
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Early access to blog content
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Monthly cybersecurity newsletter
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Link href="https://www.patreon.com/c/hackerwasii/membership"
                prefetch={false}>
                <Button className="w-full">Join Now</Button>
              </Link>
            </div>
          </div>
          <div
            className="relative flex flex-col p-6 bg-card shadow-lg rounded-lg dark:bg-card-dark justify-between border border-purple-500">
            <div
              className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3
                className="text-2xl font-bold text-center text-foreground dark:text-card-foreground">You&apos;re Awesome!</h3>
              <div className="mt-4 text-center text-muted-foreground">
                <span className="text-4xl font-bold">$15</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Everything in &apos;You&apos;re Great!&apos; tier
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Exclusive cybersecurity tutorials
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Access to private Discord chat
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Direct Q&A session each month
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Link href="https://www.patreon.com/c/hackerwasii/membership"
                prefetch={false}>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">Join Now</Button>
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col p-6 bg-card shadow-lg rounded-lg dark:bg-card-dark justify-between border border-muted">
            <div>
              <h3
                className="text-2xl font-bold text-center text-foreground dark:text-card-foreground">You&apos;re FANTASTIC!</h3>
              <div className="mt-4 text-center text-muted-foreground">
                <span className="text-4xl font-bold">$25</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Everything in &quot;You&apos;re Awesome!&quot; tier
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Monthly one-on-one Q&A sessions
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Personalized cybersecurity advice
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Priority WhatsApp support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Link href="https://www.patreon.com/c/hackerwasii/membership"
                prefetch={false}>
                <Button className="w-full">Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
