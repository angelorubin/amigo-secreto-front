"use server";
import { deleteCookie, getCookie, hasCookie } from "cookies-next"
import { cookies } from "next/headers"
import { http } from "./axios"

export async function verifyToken() {
  const token = getCookie('token', { cookies })

  const result = await http.get("/admin/ping", {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })

  if (result) {
    return true
  }
  else {
    return false
  }
}
