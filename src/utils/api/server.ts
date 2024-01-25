"use server";
import { getCookie, hasCookie } from "cookies-next";
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
      return false;
    }
  } catch (error) {
    return false;
  }
}
