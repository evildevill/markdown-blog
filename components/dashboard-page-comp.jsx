"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function DashboardPageComp({ user }) {

  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? (
    (<div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside
        className="fixed inset-y-0 left-0 z-0 hidden w-14 flex-col pt-20 border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}>
              <HomeIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Home</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <MessageCircleIcon className="h-5 w-5" />
                  <span className="sr-only">Messages</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Messages</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="dashboard"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <BellIcon className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Notifications</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/api-key"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <LockIcon className="h-5 w-5" />
                  <span className="sr-only">API key</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">API key</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/settings"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <LogoutLink
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}>
                  <LogOutIcon className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </LogoutLink>
              </TooltipTrigger>
              <TooltipContent side="right">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="sticky top-0 z-0 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.picture} alt="user-image" />
              <AvatarFallback>{user?.given_name}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 leading-none">
              <div className="font-semibold">{user?.given_name}</div>
              <div className="text-sm text-muted-foreground">{user?.email}</div>
            </div>
          </div>
          <Link className="ml-auto" href="/dashboard/settings" prefetch={false}>
            <Button variant="outline" size="sm" >
              Settings
            </Button>
          </Link>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h1 className="text-2xl font-bold">Welcome back, {user?.given_name}!</h1>
              <p className="text-muted-foreground text-sm">Here is a quick overview of your account and recent activity.</p>
            </div>
            <div className="grid gap-2">
              <Link className="ml" href="/dashboard/api-key" prefetch={false}>
                <Button className="w-fit">
                  Get Your API Key
                </Button>
              </Link>
            </div>
            {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                  <Link href="#" className="text-sm text-primary" prefetch={false}>
                    View all
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.picture} alt="user-image" />
                          <AvatarFallback>{user?.given_name}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user?.given_name}</div>
                          <div className="text-xs text-muted-foreground">Liked your post</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">2h ago</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.picture} alt="user-image" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user?.given_name}</div>
                          <div className="text-xs text-muted-foreground">Commented on your post</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">4h ago</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.picture} alt="user-image" />
                          <AvatarFallback>{user?.given_name}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user?.given_name}</div>
                          <div className="text-xs text-muted-foreground">Shared your post</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">6h ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                  <Link href="#" className="text-sm text-primary" prefetch={false}>
                    View all
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-muted p-2 text-center">
                          <div className="text-lg font-bold">23</div>
                          <div className="text-xs text-muted-foreground">Apr</div>
                        </div>
                        <div>
                          <div className="font-medium">Team Offsite</div>
                          <div className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Attend
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-muted p-2 text-center">
                          <div className="text-lg font-bold">28</div>
                          <div className="text-xs text-muted-foreground">Apr</div>
                        </div>
                        <div>
                          <div className="font-medium">Company Meetup</div>
                          <div className="text-xs text-muted-foreground">7:00 PM - 9:00 PM</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Attend
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <Link
                      href="#"
                      className="flex items-center justify-between rounded-lg bg-muted p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}>
                      <div className="flex items-center gap-2">
                        <FilePenIcon className="h-5 w-5" />
                        <div>Create Post</div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between rounded-lg bg-muted p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}>
                      <div className="flex items-center gap-2">
                        <MessageCircleIcon className="h-5 w-5" />
                        <div>New Message</div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between rounded-lg bg-muted p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}>
                      <div className="flex items-center gap-2">
                        <UploadIcon className="h-5 w-5" />
                        <div>Upload Media</div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </main>
      </div>
    </div>)
  ) : (
    (<div>
      This page is protected, please <LoginLink> Login </LoginLink> to view this page
    </div>)
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}

function LockIcon(props) {
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
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>)
  );
}

// function ChevronRightIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="m9 18 6-6-6-6" />
//     </svg>)
//   );
// }

// function FilePenIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//     </svg>)
//   );
// }

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>)
  );
}

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>)
  );
}

function SettingsIcon(props) {
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
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}

// function UploadIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="17 8 12 3 7 8" />
//       <line x1="12" x2="12" y1="3" y2="15" />
//     </svg>)
//   );
// }