import { redirect } from "next/navigation";
import { authentication } from "@/utils/api/server";
import AdminPage from "@/app/components/admin/AdminPage";

export default async function Page() {
  const isAuth = await authentication();

  if (!isAuth) {
    redirect("/admin/login");
  }

  return <AdminPage />
}
