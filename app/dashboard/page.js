import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { DashboardPageComp } from "@/components/dashboard-page-comp";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (await isAuthenticated()) ? (
    <DashboardPageComp user={user} />
  ) : (
    <div className="bg-muted py-8 text-center">
      <p className="text-lg text-muted-foreground">
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
