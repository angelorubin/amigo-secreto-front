"use client";
import { deleteCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Logout(props: any) {
  const router = useRouter();

  const logout = () => {
    deleteCookie("token");
    router.push("/admin/login");
  };

  return <button onClick={logout}>sair</button>;
}
