"use client";
import { deleteCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";
import { pingAdmin } from "@/utils/api/server";
import { useCustomSWR } from "../hooks/useCustomSWR";
import Loading from "../components/shared/loading";

const fetchData = async () => await pingAdmin();

export default function Page() {
  const router = useRouter();
  const { data, error, isLoading } = useCustomSWR("/admin/ping", fetchData, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateOnMount: true
  });

  if (isLoading) return <Loading />;

  if (!data) {
    return redirect("/admin/login");
  }

  return (
    <>
      <h1> Painel ADM</h1>
      <button
        onClick={() => {
          deleteCookie("token");
          router.push('/admin/login')
        }}>
        sair
      </button>
    </>
  );
}
