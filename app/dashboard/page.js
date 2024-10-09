import React from "react";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Dashboard = () => {
  return (
    <div>
        <h2 className="text-5xl">Dashboard</h2>
        <LogoutLink>Log out</LogoutLink>
    </div>
  )
};

export default Dashboard;
