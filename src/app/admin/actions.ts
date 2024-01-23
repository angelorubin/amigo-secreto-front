'use server'
import { http } from '@/utils/api/axios'
import { cookies } from "next/headers"

export const verifyToken = async () => {
  try {
    const token = JSON.stringify(cookies().get('token')?.value)

    console.log(token)

    const res = await http.post('/admin/ping', {
      headers: {
        'Authorization': `${token}`
      }
    })

    return res
  } catch (error) {
    return false
  }
}
