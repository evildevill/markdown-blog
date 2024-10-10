import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Dashboard from "./Dashboard";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function DashboardPage() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (await isAuthenticated()) ? (
    <Dashboard user={user} />
  ) : (
    <div>
      This page is protected, please <LoginLink>Login</LoginLink> to view it
    </div>
  );
}
