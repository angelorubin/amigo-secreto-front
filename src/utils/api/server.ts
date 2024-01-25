"use server";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { http } from "./axios";

export async function pingAdmin() {
  try {
    const token = getCookie("token", { cookies });

    const res: boolean = await http.get("/admin/ping", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
