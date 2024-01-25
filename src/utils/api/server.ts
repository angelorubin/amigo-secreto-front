"use server";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { cookies } from "next/headers";
import { http } from "./axios";

export async function pingAdmin() {
  try {
    const hasToken = hasCookie("token", { cookies });

    if (hasToken) {
      const token = getCookie("token", { cookies });
      await http.get("/admin/ping", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return true;
    } else {
      deleteCookie('token')
      return false;
    }
  } catch (error) {
    deleteCookie('token')
    return false;
  }
}
