import { redirect } from "next/navigation";
import { verifyToken } from "@/utils/api/server";
import { AdminPage } from "@/app/components/admin/AdminPage";

export default async function Page() {
  const logged = await verifyToken();

  if (!logged) {
    redirect("/admin/login");
  }

  return <AdminPage />;
}
