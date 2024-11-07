import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { DashboardPageComp } from "@/components/dashboard-page-comp";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dashboard - Waseem Akram",
  description: "Welcome to my dashboard. Here you can access all your details, generate APIs, and manage your account. Explore your profile and customize your settings.",
  openGraph: {
    title: "Dashboard - Waseem Akram",
    description: "Welcome to my dashboard. Here you can access all your details, generate APIs, and manage your account. Explore your profile and customize your settings.",
    url: "https://hackerwasii.com/dashboard",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard - Waseem Akram",
    description: "Welcome to my dashboard. Here you can access all your details, generate APIs, and manage your account. Explore your profile and customize your settings.",
    creator: "@wasii_254",
  },
};

export default async function DashboardPage() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (await isAuthenticated()) ? (
    <DashboardPageComp user={user} />
  ) : (
    <div className="py-64 text-center">
      <p className="text-lg ">
        This page is protected, please
        <br />
        <span className="ml-2">
          <LoginLink>
            <Button variant="outline" className="text-primary">
              Log in
            </Button>
          </LoginLink>
        </span>
        <br />
        to view this page.
      </p>
    </div>
  );
}
