import Image from "next/image";
import Link from "next/link"

export function AboutPage() {
  return (
    (<div className="max-w-4xl mx-auto p-6 space-y-8 mb-36">
      <div className="text-4xl font-bold">Whoami</div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="col-span-1">
          <div className="p-4 bg-muted rounded-md">
            <h2 className="text-xl font-semibold">Hi there, I am</h2>
            <p className="text-lg font-bold">Waseem Akram</p>
            <p className="text-sm">aka hackerwasii</p>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-bold">SOCIAL MEDIA</h3>
            <div className="flex items-center space-x-4 mt-2">
              <Link
                href="https://twitter.com/wasii_254"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center"
                prefetch={false}>
                <TwitterIcon className="w-5 h-5 text-muted-foreground" />
              </Link>
              <Link
                href="https://www.instagram.com/wasii_254/"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center"
                prefetch={false}>
                <InstagramIcon className="w-5 h-5 text-muted-foreground" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hackerwasii/"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center"
                prefetch={false}>
                <LinkedinIcon className="w-5 h-5 text-muted-foreground" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hackerwasii/"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center"
                prefetch={false}>
                <GitHubIcon className="w-5 h-5 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-2">
          <ul className="list-disc pl-5">
            <li>I am currently living in Punjab, Pakistan.</li>
            <li>I am a security analyst by day and hacker by night.</li>
            <li>
              I am an information security enthusiast with strong interest in information security, specifically
              penetration testing and offensive security.
            </li>
            <li>I am an author of several security tools and articles.</li>
            <li>I have reported security vulnerabilities in major tech companies.</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">My Popular YouTube Videos</h3>
        <p className="text-sm underline">
          <Link href="https://youtube.com/">How to install security tools? </Link>
        </p>
        <p className="text-sm underline">
          <Link href="https://youtube.com/">How to set up a secure network?</Link>
        </p>
        <p className="text-sm underline">
          <Link href="https://youtube.com/">Learn network security for beginners.</Link>
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-muted rounded-md text-center">
          <h4 className="text-sm font-medium">YouTube Subscribers</h4>
          <p className="text-2xl font-bold">2.54k</p>
        </div>
        <div className="p-4 bg-muted rounded-md text-center">
          <h4 className="text-sm font-medium">Video Views</h4>
          <p className="text-2xl font-bold">40.2k</p>
        </div>
      </div>
      
      {/* Certification section */}

      <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Certification Badges</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
            <Image
              src="/images/oscp-badge.png"
              width="80"
              height="80"
              alt="OSCP Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }} />
            <Image
              src="/images/ceh-badge.png"
              width="80"
              height="80"
              alt="CEH Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }} />
            <Image
              src="/images/sc-900-logo.png"
              width="80"
              height="80"
              alt="YouTube Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }} />
            <Image
              src="/images/cybersecurity-cisco-badge.png"
              width="80"
              height="80"
              alt="Security Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }} />
            <Image
              src="/images/sc-900-logo.png"
              width="80"
              height="80"
              alt="Python Badge"
              className="h-20 w-20 sm:h-24 sm:w-24"
              style={{ aspectRatio: "80/80", objectFit: "cover" }} />
          </div>
        </div>

    </div>)
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}


function LinkedinIcon(props) {
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
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>)
  );
}


function TwitterIcon(props) {
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
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}

function GitHubIcon(props) {
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
      strokeLinejoin="round"
    >
      <path d="M12 2c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8 11.4.6.1.8-.3.8-.7v-2.5c-3.3.7-4-1.6-4-1.6-.5-1.2-1.3-1.5-1.3-1.5-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.5.1-3.1 0 0 1.1-.4 3.5 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.7 3.5-1.3 3.5-1.3.7 1.6.2 2.8.1 3.1.8.9 1.3 2 1.3 3.4 0 4.8-2.8 5.9-5.5 6.2.4.3.7.9.7 1.8v2.6c0 .4.2.8.8.7 4.6-1.6 8-6.1 8-11.4 0-6.6-5.4-12-12-12z" />
    </svg>
  );
}
