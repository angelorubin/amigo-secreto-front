'use server'
import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { http } from './axios'


export async function pingAdmin() {
  'use server'
  try {
    const token = getCookie('token', { cookies })

    await http.get('/admin/ping', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return true
  } catch (error) {
    return false
  }
}
