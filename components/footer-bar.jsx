import Link from "next/link"
export function FooterBar() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">&copy; 2024 Made with ❤️ by Waseem Akram</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link href="/contact" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                    Contact me
                </Link>
                <Link href="/legal/terms" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                    Terms of Service
                </Link>
                <Link href="/legal/privacy-policy" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                    Privacy
                </Link>
            </nav>
        </footer>
    )
}
