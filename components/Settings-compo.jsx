"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { SkeletonLoader } from "./SkeletonLoader"

export function SettingsCompo({ user }) {

    const { isAuthenticated, isLoading } = useKindeBrowserClient();
    if (isLoading) return <SkeletonLoader />;

    return isAuthenticated ? (
        (<div className="flex min-h-screen w-full">
            <aside className="fixed inset-y-0 left-0 z-0 pt-20 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Link
                            href="/dashboard"
                            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                            prefetch={false}
                        >
                            <HomeIcon className="h-4 w-4 transition-all group-hover:scale-110" />
                            <span className="sr-only">Home</span>
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/dashboard"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <MailOpenIcon className="h-5 w-5" />
                                    <span className="sr-only">Messages</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Messages</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/dashboard"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <BellIcon className="h-5 w-5" />
                                    <span className="sr-only">Notifications</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Notifications</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/dashboard/settings"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <SettingsIcon className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <LogoutLink 
                                    className="flex h-9 w-9 z-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 w-full">
                <main className="flex-1 p-4 md:p-10">
                    <div className="mx-auto max-w-6xl">
                        <div className="flex flex-col items-center gap-4 py-8 md:flex-row md:items-start md:gap-8">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src={user.picture} alt="user-image" />
                                <AvatarFallback>GIF</AvatarFallback>
                            </Avatar>
                            <div className="space-y-2 text-center md:text-left">
                                <h1 className="text-3xl font-bold">Welcome back, {user?.given_name}!</h1>
                                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
                            </div>
                        </div>
                        <div className="grid gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Personal Information</CardTitle>
                                    <CardDescription>Update your name, email, and password.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" defaultValue={user?.given_name} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" defaultValue={user?.family_name} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" defaultValue={user?.email} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password">Password</Label>
                                            <Input id="password" type="password" defaultValue="************" />
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="border-t p-6">
                                    <Button>Save Changes</Button>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account Security</CardTitle>
                                    <CardDescription>Manage your account security settings.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-bold">Two-Factor Authentication</p>
                                                <p className="text-sm text-muted-foreground">By default, two-factor authentication is enabled. so you will be asked to enter a verification code when you sign in.</p>
                                            </div>
                                            <Switch aria-label="Two-Factor Authentication"
                                                defaultChecked={true}
                                                disabled
                                                aria-readonly
                                            />
                                        </div>
                                        {/* <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">Password Recovery</p>
                                                <p className="text-sm text-muted-foreground">Set up a way to reset your password.</p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Set Up
                                            </Button>
                                        </div> */}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LogOutIcon(props) {
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
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    )
}


function MailOpenIcon(props) {
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
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
        </svg>
    )
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