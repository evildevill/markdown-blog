import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { SettingsCompo } from "@/components/Settings-compo";

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
