import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { http } from './axios'

export const pingAdmin = async () => {
  try {
    const token = getCookie('token')

    await http.post('/admin/ping', {
      headers: {
        'Authorization': `${token}`
      }
    })

    console.log(JSON.stringify(token))
   
    return true
  } catch (error) {
    return false
  }
}
