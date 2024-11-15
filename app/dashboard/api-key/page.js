import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ApiKeys } from "@/components/api-keys";
import React from "react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Generate API Key - Waseem Akram",
  description: "Generate and manage your API keys for secure access to Waseem Akram's platform. Control and customize your API integrations with ease.",
  openGraph: {
    title: "Generate API Key - Waseem Akram",
    description: "Generate and manage your API keys for secure access to Waseem Akram's platform. Control and customize your API integrations with ease.",
    url: "https://hackerwasii.com/dashboard/api-key",
    siteName: "Waseem Akram – Researcher, Pentester, Dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate API Key - Waseem Akram",
    description: "Generate and manage your API keys for secure access to Waseem Akram's platform. Control and customize your API integrations with ease.",
    creator: "@wasii_254",
  },
};

export default async function ApiKey() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (await isAuthenticated()) ? (
    <ApiKeys user={user} />
  ) : (
    <div className="py-64 text-center">
      <p className="text-lg py-8">
        This Page is protected, please
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