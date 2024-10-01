import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export function AboutPage() {
  return (
    (<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">whoami</h1>
            <PersonStandingIcon className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Hi there, I am Muhammad Waseem Akram - aka hackerwasii
                <FlameIcon className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                <li>I am currently living in Punjab, Pakistan.</li>
                <li>I am a security analyst by day and hacker by night.</li>
                <li>
                  I am an <span className="font-bold">information security</span> enthusiast with strong interest in{" "}
                  <span className="font-bold">information security</span>, specifically penetration testing and
                  offensive security.
                </li>
                <li>I am an author of Instahack & Massive Instagram bruteforce tool.</li>
                <li>I have Reported Security Vulnerabilities in Microsoft, Facebook, Dell, Apple etc.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">My GitHub Stats</h2>
            <GithubIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <div className="bg-muted rounded-md p-4 flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-primary" />
              <span className="font-bold">1.2k</span>
              <span className="text-muted-foreground">Stars</span>
            </div>
            <div className="bg-muted rounded-md p-4 flex items-center gap-2">
              <ForkliftIcon className="h-5 w-5 text-primary" />
              <span className="font-bold">500</span>
              <span className="text-muted-foreground">Forks</span>
            </div>
            <div className="bg-muted rounded-md p-4 flex items-center gap-2">
              <BugIcon className="h-5 w-5 text-primary" />
              <span className="font-bold">100</span>
              <span className="text-muted-foreground">Issues</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">My Popular YouTube Videos</h2>
            <VideoIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="space-y-2">
              <a href="#" className="text-blue-600 hover:underline">
                How to install instahack ?
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                How to install kali linux ?
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Learn Kali linux from basic to advance
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Network security for beginners
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Badge variant="secondary">YouTube Subscribers: 2.5k</Badge>
            <Badge variant="secondary">Videos Views: 21k</Badge>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Certification Badges</h2>
            <BadgeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
            <Image
              src="/images/oscp-badge.png"
              width="80"
              height="80"
              alt="OSCP Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
              priority={index === 0 ? true : false} // Set priority for the first image 
            />
            <Image
              src="/images/ceh-badge.png"
              width="80"
              height="80"
              alt="CEH Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
              priority={index === 0 ? true : false} // Set priority for the first image 
            />
            <Image
              src="/images/sc-900-logo.png"
              width="80"
              height="80"
              alt="YouTube Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
              priority={index === 0 ? true : false} // Set priority for the first image 
            />
            <Image
              src="/images/cybersecurity-cisco-badge.png"
              width="80"
              height="80"
              alt="Security Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
              priority={index === 0 ? true : false} // Set priority for the first image 
            />
            <Image
              src="/images/sc-900-logo.png"
              width="80"
              height="80"
              alt="Python Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
              priority={index === 0 ? true : false} // Set priority for the first image 
            />
          </div>
        </div>
      </div>
    </div>)
  );
}

function BadgeIcon(props) {
  return (
    (<svg
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
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>)
  );
}


function BugIcon(props) {
  return (
    (<svg
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
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path
        d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>)
  );
}


function FlameIcon(props) {
  return (
    (<svg
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
      <path
        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>)
  );
}


function ForkliftIcon(props) {
  return (
    (<svg
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
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
      <circle cx="13" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
    </svg>)
  );
}


function GithubIcon(props) {
  return (
    (<svg
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
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>)
  );
}


function PersonStandingIcon(props) {
  return (
    (<svg
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
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>)
  );
}


function StarIcon(props) {
  return (
    (<svg
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
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}


function VideoIcon(props) {
  return (
    (<svg
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
      <path
        d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>)
  );
}
