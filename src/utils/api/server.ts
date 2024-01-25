'use server'
import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { http } from './axios'

export async function pingAdmin() {
  try {
    const token = getCookie('token', { cookies })

    return await http.get('/admin/ping', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) ? true : false
  } catch (error) {
    return false
  }
}
