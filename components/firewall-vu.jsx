"use client";
import Link from "next/link"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const reviews = [
  {
    name: "Maham Zaman",
    avatar: "/placeholder-user.jpg",
    alt: "@shadcn",
    fallback: "MZ",
    rating: 5,
    review: "thanks i give thousands of star of this extension its help a lot"
  },
  {
    name: "Junaid Ali",
    avatar: "/placeholder-user.jpg",
    alt: "@juniadali",
    fallback: "JA",
    rating: 5,
    review: "I was use another extension but now it is paid when i use this extension it's really nice and good working thank a lot may allah give you more success and healthy.."
  },
  {
    name: "Muhammad Muneeb",
    avatar: "/placeholder-user.jpg",
    alt: "@muneeb",
    fallback: "MB",
    rating: 5,
    review: "So nice ....so Helpfull....i really thanks to its creator"
  },
  {
    name: "Memona Zainab Alvi",
    avatar: "/placeholder-user.jpg",
    alt: "@memona",
    fallback: "MZ",
    rating: 5,
    review: "Amazing Thanks for for being helpful in our studies and making it easy for us may Allah bless you"
  },
  {
    name: "Abdul Tahir",
    avatar: "/placeholder-user.jpg",
    alt: "@abdul",
    fallback: "AT",
    rating: 5,
    review: "it worked. this extension exactly does what it promises highly recommended to all students. just close your eyes and trust it."
  },
  {
    name: "NIMRA SADIQUE",
    avatar: "/placeholder-user.jpg",
    alt: "@nimra",
    fallback: "NS",
    rating: 4,
    review: "good but no one and nothing is perfect so i give 7/10"
  },
  {
    name: "Rikza Naseeb Warraich",
    avatar: "/placeholder-user.jpg",
    alt: "@rikza",
    fallback: "RN",
    rating: 5,
    review: "It is a perfect extension for us for attempt a quiz. kindly don't update it in a paid version. Thanks"
  },
  {
    name: "Ghazal Khan",
    avatar: "/placeholder-user.jpg",
    alt: "@ghazal",
    fallback: "GK",
    rating: 5,
    review: "Smoothly working. You helped a lot of students by developing this extension. Keep it up.. Great work ngl"
  }
];

export function FirewallVu() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 7778;
    const duration = 1;
    const incrementTime = (duration / end) * 10000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto flex-col min-h-[100dvh] items-center">
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                    Firewall Bypass VU Freedom for VU Students
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-1xl">
                    Firewall Bypass VU is the ultimate browser extension for Virtual University students. Effortlessly bypass lecture restrictions, copy quizzes, and enable easy copy-paste for GDBs—all in one tool. Simplify your academic tasks and enjoy unrestricted access to your learning resources. Enhance your VU experience with Firewall Bypass VU today!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://dub.sh/vufirewall"
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Download Now
                  </Link>
                </div>
              </div>
              <Image
                src="/images/firewall-bypass-vu.webp"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-video" />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-5xl">
                  Key Features of Firewall Bypass VU
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-1xl/relaxed">
                  Effortlessly bypass lecture restrictions, copy quizzes, and manage GDBs with ease. Firewall Bypass VU streamlines your Virtual University tasks, saving you time and enhancing your productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <BookmarkIcon className="h-6 w-6" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Unlock Lecture Access</h3>
                      <p className="text-muted-foreground">Bypass lecture view restrictions without the need to watch the full lecture.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ClipboardIcon className="h-6 w-6" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Allow Quiz copy</h3>
                      <p className="text-muted-foreground">Effortlessly copy quiz questions and answers for quicker completion.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <WandIcon className="h-6 w-6" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Effortless GDB Copy-Paste</h3>
                      <p className="text-muted-foreground">Simplify your GDB tasks with easy copy-paste functionality.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/images/firewall-bypass-vu.webp"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
            </div>
          </div>
        </section>
        {/* how to use this extension video section */}
        <section id="how-to-use" className="w-full py-12 md:py-24 lg:pt-32 lg:pb-0">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How to Use Firewall Bypass VU</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-sm xl:text-sm/relaxed">
                  Learn how to use Firewall Bypass VU to unlock lecture access, copy quizzes, and manage GDBs with ease. Watch the video tutorial to get started.
                </p>
              </div>
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] mx-auto">
                <video
                  src="/video.mp4"
                  title="Video player"
                  className="absolute inset-0"
                  controls
                  controlsList="nodownload"
                  autoPlay
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="w-full py-12 md:py-24 lg:pt-1 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Students Reviews</div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">What Vu Students Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-sm xl:text-sm/relaxed">
                  Discover what students have to say about their experience with Firewall Bypass VU. Read their reviews to learn more about the benefits of my extension.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {reviews.map((review, index) => (
                <Card key={index} className="flex flex-col gap-4 p-4 sm:p-6 h-44">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage src={review.avatar} alt={review.alt} />
                      <AvatarFallback>{review.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="font-semibold">{review.name}</div>
                      <div className="flex items-center gap-1 text-xs">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm leading-relaxed text-muted-foreground flex-grow">
                    {review.review}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* cta */}
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
                  Ready to Streamline Your VU Experience?
                </h2>
                <p className="max-w-[900px] text-primary-foreground md:text-xl/relaxed lg:text-sm xl:text-sm/relaxed">
                  Get started with Firewall Bypass VU today and enjoy unrestricted access to your Virtual University resources. Simplify your academic tasks and enhance your productivity with my powerful extension.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://dub.sh/vufirewall"
                  target="_blank"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* number of users  */}
        <section id="users" className="w-full py-24 md:py-24 lg:pt-32 lg:pb-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Thousands of Happy Users</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-sm xl:text-sm/relaxed">
                  Firewall Bypass VU has helped thousands of Virtual University students streamline their academic tasks. Join my community of happy users and enjoy the benefits of my powerful extension.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-4xl font-bold">{count.toLocaleString()}+</div>
                  <div className="text-lg font-semibold text-muted-foreground">Happy Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Frequently Asked Questions</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Got Questions? I&apos;ve Got Answers.</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-sm xl:text-sm/relaxed">
                  Explore FAQ section to find answers to the most common questions about my Firewall Bypass VU extension.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-left">
                    <h3 className="text-lg font-bold">How do I install Firewall Bypass VU?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      Simply visit our website, click the &quot;Get the Extension&quot; button, and follow the instructions to add the extension to your Chrome browser.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-left">
                    <h3 className="text-lg font-bold">What features does Firewall Bypass VU offer?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      Our extension helps you skip lectures, copy quiz content, and enable easy GDB copy-paste, allowing you to streamline your Virtual University tasks.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-left">
                    <h3 className="text-lg font-bold">Is Firewall Bypass VU free to use?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      Yes, the Firewall Bypass VU extension is completely free. Enjoy all features without any hidden costs or subscriptions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-4">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-left">
                    <h3 className="text-lg font-bold">Is the extension secure and private?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      Absolutely! We prioritize your privacy and security. Our extension uses strong encryption and follows strict data protection guidelines to keep your information safe.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-left">
                    <h3 className="text-lg font-bold">How can I get support for the extension?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      You can contact our support team via email or live chat. We also offer a comprehensive knowledge base for quick solutions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-left">
                    <h3 className="text-lg font-bold">Does the extension work on other browsers?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      Currently, the extension is available only for Google Chrome. We&apos;re working on versions for other browsers like Firefox and Edge, so stay tuned for updates.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-sm xl:text-sm/relaxed">
                  Have a question or need assistance with my Firewall Bypass VU extension? Contact me for help and guidance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="mailto:hello@hackerwasii.com"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

function BookmarkIcon(props) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function WandIcon(props) {
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
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  );
}