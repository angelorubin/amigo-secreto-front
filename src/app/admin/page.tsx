import { redirect } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { verifyToken } from "@/utils/api/server";
import Loading from "@/app/components/shared/loading";
import Logout from "@/app/components/shared/logout";
import { AdminPage } from "@/app/components/admin/AdminPage";

export default async function Page() {
  const logged = await verifyToken();

  if (!logged) {
    redirect("/admin/login");
  }

  return <AdminPage />;
}
