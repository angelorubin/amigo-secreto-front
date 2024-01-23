'use server'
import { http } from "@/utils/api/axios"
import { cookies } from 'next/headers'

export const login = async (email: string, password: string) => {
  try {
    const json = await http.post("/admin/login", { email, password })
    return json.data.token as string ?? false
  } catch (error) {
    return false
  }
}

export const setToken = (token: string) => JSON.stringify(cookies().set('token', token))
