"use client";
import Link from "next/link"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./dark-switcher";
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CommandDialogPopup } from "./command-dialog-popup";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function Navbar() {

  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setProgress(30)

    setTimeout(() => {
      setProgress(70)
    }, 100);

    setTimeout(() => {
      setProgress(100)
    }, 500);
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 700);
  }, [])


  return (
    (<header className="w-full shadow bg-background/50 sticky top-0 backdrop-blur z-10">
      <LoadingBar color="#F35051" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="font-bold">Waseem Akram</span>
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Home
          </Link>
          <Link
            href="/about"
            className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            About
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Contact
          </Link>
          <Link
            href="https://www.patreon.com/hackerwasii/shop"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Store
          </Link>
          <RegisterLink postLoginRedirectURL="/dashboard" className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch="false">Sign up</RegisterLink>
          <CommandDialogPopup />
          <ModeToggle />
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              {/* <span className="sr-only">Toggle navigation menu</span> */}
            </Button>
          </DrawerTrigger>
          <DrawerContent side="right">
            {/* <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader> */}
            <div className="grid gap-4 p-4">
              <Link
                href="/"
                className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Home
              </Link>
              <Link
                href="/about"
                className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                About
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Contact
              </Link>
              <Link
                href="https://www.patreon.com/hackerwasii/shop"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Store
              </Link>
              <RegisterLink postLoginRedirectURL="/dashboard" className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" 
              prefetch="false">Sign up</RegisterLink>
              {/* <CommandDialogPopup /> */}
              <ModeToggle />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>)
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
