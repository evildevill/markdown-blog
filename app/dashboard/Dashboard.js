"use client"
import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Dashboard({ user }) {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <h3>
          Hey, Welcome {user?.given_name} - {user?.email}
        </h3>
        <div>
          {user?.picture && (
            <Image src={user.picture} alt="User Picture" className="rounded-full w-32 h-32"
              width="128"
              height="128"
              priority={true}
            />
          )}
        </div>
        <div>
          <LogoutLink>Log out</LogoutLink>
        </div>
      </div>
    </div>
  ) : (
    <div>
      This page is protected, please <LoginLink>Login</LoginLink> to view it
    </div>
  );
}
