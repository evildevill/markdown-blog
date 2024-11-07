import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { SettingsCompo } from "@/components/Settings-compo";

export const metadata = {
  title: "Settings - Waseem Akram",
  description: "Manage your account settings, privacy preferences, and API configurations. Customize your profile and control your data on Waseem Akram's platform.",
  openGraph: {
    title: "Settings - Waseem Akram",
    description: "Manage your account settings, privacy preferences, and API configurations. Customize your profile and control your data on Waseem Akram's platform.",
    url: "https://hackerwasii.com/dashboard/settings",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Settings - Waseem Akram",
    description: "Manage your account settings, privacy preferences, and API configurations. Customize your profile and control your data on Waseem Akram's platform.",
    creator: "@wasii_254",
  },
};

export default async function SettingsPage() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (await isAuthenticated()) ? (
    <SettingsCompo user={user} />
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
