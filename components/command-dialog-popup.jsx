"use client";

import * as React from "react";
import {
  // CreditCard,
  // Settings,
  User,
  Bookmark,
} from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandDialogPopup() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const router = useRouter(); // Initialize useRouter

  // Static pages
  const staticPages = [
    { icon: User, label: "About", path: "/about", shortcut: "⌘A" },
    { icon: Bookmark, label: "Blog", path: "/blog", shortcut: "⌘B" },
    // { icon: CreditCard, label: "Billing", path: "/billing", shortcut: "⌘B" },
    // { icon: Settings, label: "Settings", path: "/settings", shortcut: "⌘S" },
  ];

  // Example blog posts
  const blogPosts = [
    { label: "How Hackers Target Instagram Accounts & Protect Yourself", slug: "/blogposts/how-hackers-target-instagram-accounts-protect-yourself-2024" },
    { label: "Malware Development: How to Call Windows API from Go", slug: "/blogposts/malware-development-how-to-call-windows-api-from-go" },
    { label: "Malware Development: Create Remote Thread Shellcode Injection Golang", slug: "/blogposts/malware-development-create-remote-thread-shellcode-injection-golang" },
    { label: "Bug Bounty Resources", slug: "/blogposts/bugbounty-resources-2024" },
    { label: "Steganography for Beginners", slug: "/blogposts/steganography-beginners" },
    { label: "Resources", slug: "/blogposts/resources" },
    { label: "Boom Bashed 🧨💥", slug: "/blogposts/boom-bashed" },
    { label: "Active Directory Resources", slug: "/blogposts/active-directory-resources" },
    { label: "Understanding the basename command in linux", slug: "/blogposts/understanding-the-basename-command-in-linux" },
  ];

  // Filter items based on the search query
  const filteredStaticPages = staticPages.filter((page) =>
    page.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogPosts = blogPosts.filter((post) =>
    post.label.toLowerCase().includes(query.toLowerCase())
  );

  // Handle navigation when an item is clicked
  const handleNavigation = (path) => {
    setOpen(false); // Close the command dialog after navigation
    router.push(path); // Navigate to the page
  };

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Blog Posts */}
          {filteredBlogPosts.length > 0 && (
            <CommandGroup heading="Blog Posts">
              {filteredBlogPosts.map((post, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleNavigation(post.slug)} // Handle click
                >
                  <span>{post.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          <CommandSeparator />

          {/* Static Pages */}
          {filteredStaticPages.length > 0 && (
            <CommandGroup heading="Static Pages">
              {filteredStaticPages.map((page, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleNavigation(page.path)} // Handle click
                >
                  <page.icon className="mr-2 h-4 w-4" />
                  <span>{page.label}</span>
                  {page.shortcut && (
                    <CommandShortcut>{page.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
