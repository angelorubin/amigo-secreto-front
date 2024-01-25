"use client";
import { redirect, useRouter } from "next/navigation";
import { pingAdmin } from "@/utils/api/server";
import { useCustomSWR } from "../hooks/useCustomSWR";
import Loading from "../components/shared/loading";
import { deleteCookie } from "cookies-next";

const fetchData = async () => await pingAdmin();

export default function Page() {
  const router = useRouter();
  const { data, error, isLoading } = useCustomSWR("/admin/ping", fetchData, {
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
    refreshInterval: 1000,
  });

  if (isLoading) return <Loading />;

  if (!data) {
    return redirect("/admin/login");
  }

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <h1> Painel ADM</h1>
      <button
        onClick={() => {
          deleteCookie("token");
        }}>
        sair
      </button>
    </>
  );
}
