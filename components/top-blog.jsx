import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link"

export function TopBlog() {
  return (
    (<section className="px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="container mx-auto">
        <div
          className="flex flex-col items-center md:flex-row md:justify-between md:items-end mb-6 md:mb-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Top Stories</h2>
            <p className="text-muted-foreground mb-4 md:mb-0">Read our weekly top blog posts</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-1">
            <Card className="h-full">
              <CardContent className="flex flex-col h-full">
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Blog Post Image"
                  className="aspect-video object-cover rounded-t-md" />
                <div className="flex-1 p-4 grid gap-2">
                  <h3 className="text-lg font-semibold">Mastering Responsive Design: Tips and Techniques</h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Discover the secrets to creating stunning, responsive websites that adapt seamlessly to any device.
                    Learn practical tips and techniques from industry experts.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="text-primary inline-flex items-center gap-2"
                      prefetch={false}>
                      <span>Read More</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="p-1">
            <Card className="h-full">
              <CardContent className="flex flex-col h-full">
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Blog Post Image"
                  className="aspect-video object-cover rounded-t-md" />
                <div className="flex-1 p-4 grid gap-2">
                  <h3 className="text-lg font-semibold">Unleashing the Power of React: A Comprehensive Guide</h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Dive deep into the world of React, the popular JavaScript library for building user interfaces.
                    Explore its core concepts, best practices, and advanced techniques.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="text-primary inline-flex items-center gap-2"
                      prefetch={false}>
                      <span>Read More</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="p-1">
            <Card className="h-full">
              <CardContent className="flex flex-col h-full">
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Blog Post Image"
                  className="aspect-video object-cover rounded-t-md" />
                <div className="flex-1 p-4 grid gap-2">
                  <h3 className="text-lg font-semibold">Elevating User Experience: Principles and Practices</h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Learn how to design and develop user-centric experiences that delight your customers. Explore proven
                    principles and best practices for creating intuitive and engaging interfaces.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="text-primary inline-flex items-center gap-2"
                      prefetch={false}>
                      <span>Read More</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>)
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>)
  );
}
