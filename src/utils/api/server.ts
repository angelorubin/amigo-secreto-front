"use server";
import { getCookie } from "cookies-next";
import { http } from "./axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const authentication = async () => {
  try {
    const token = getCookie("token", { cookies });

    if (!token) {
      redirect("/admin/login");
    }

    await http("/admin/ping")

    return true;
  } catch (error) {
    return false;
  }
};
