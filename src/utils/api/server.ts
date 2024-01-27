"use server";
import { getCookie, deleteCookie } from "cookies-next"
import { cookies } from "next/headers"
import { http } from "./axios"

export async function verifyToken() {
  try {
    const token = getCookie('token', { cookies })

    const isAuthenticated = await http("/admin/ping", {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })

    isAuthenticated ? true : false

  } catch (error) {
    return false
  }
}

export async function delCookie(cookieName: string) {
  deleteCookie(cookieName, { cookies })
}

export async function setCookie(cookieKey: string, cookieValue: any) {
  setCookie(cookieKey, cookieValue)
}
