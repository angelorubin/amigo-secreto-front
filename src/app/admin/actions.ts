'use server'
import { http } from '@/utils/api/axios'
import { cookies } from "next/headers"

export async function verifyToken() {
  try {
    const token = JSON.stringify(cookies().get('token')?.value)

    const res = await http.post('/admin/ping', {
      headers: {
        'Authorization': `${token}`
      }
    })

    console.log(res)

    return res
  } catch (error) {
    return false
  }
}
