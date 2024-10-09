import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Dashboard({ user }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <h3>
          Hey, Welcome {user?.given_name} - {user?.email}
        </h3>
        <LogoutLink>Log out</LogoutLink>
      </div>
    </div>
  );
}
