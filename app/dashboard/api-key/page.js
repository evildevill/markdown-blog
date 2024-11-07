import { ApiKeys } from "@/components/api-keys";
import React from "react";

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

const ApiKey = () => {
  return <ApiKeys />;
};

export default ApiKey;
