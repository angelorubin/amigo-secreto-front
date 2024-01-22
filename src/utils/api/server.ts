import { http } from './axios'
import { cookies } from "next/headers"

export const verifyToken = async () => {
  try {
    const token = cookies().get('token')?.value

    await http.post('/admin/ping', {
      headers: {
        'Authorization': `${token}`
      }
    })

    return true
  } catch (error) {
    return false
  }
}

export const setCookie = (token: string) => {

}
