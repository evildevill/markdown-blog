import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Dashboard from "./Dashboard";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getKindeServerSession();
  if (!session || !session.isAuthenticated()) {
    // Redirect to login if no user is found
    redirect("/");
  }
  // Await the user data
  const user = await session.getUser();
  return <Dashboard user={user} />;
}
