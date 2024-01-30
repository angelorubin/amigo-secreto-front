'use client'
import { redirect, useRouter } from "next/navigation";
import { verifyToken } from "@/utils/api/server";
import { AdminPage } from "@/app/components/admin/AdminPage";
import { useState } from "react";
import useSWR from "swr";

export default function Page() {
  const { data, isLoading } = useSWR(['verify-token', '/admin/ping'], verifyToken)
  // const router = useRouter()
  const logged = true // await verifyToken();

  if (!data) {
    // redirect("/admin/login");
  }

  return <AdminPage />;
}
