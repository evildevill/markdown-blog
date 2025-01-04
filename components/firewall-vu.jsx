import Link from "next/link"
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function FirewallVu() {
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
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Get the Extension
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
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
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Frequently Asked Questions</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Got Questions? We&apos;ve Got Answers.</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-sm xl:text-sm/relaxed">
                  Explore our FAQ section to find answers to the most common questions about our Firewall Bypass VU extension.
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
              </Accordion>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-5">
                  <AccordionTrigger className="flex w-full items-center justify-between rounded-lg bg-muted px-4 py-3 text-left">
                    <h3 className="text-lg font-bold">Can I customize the extension?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      Yes, you can customize the extension&apos;s appearance, including theme colors and UI elements, to suit your preferences.
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