'use server'
import { http } from "@/utils/api/axios"
import { setCookie } from 'cookies-next'

export const login = async (email: string, password: string) => {
  try {
    const json = await http.post("/admin/login", { email, password })
    return json.data.token as string ?? false
  } catch (error) {
    return false
  }
}
