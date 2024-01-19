import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import http from 'axios'

export const pingAdmin = async () => {
  try {
    const token = getCookie('token', { cookies })

    console.log(token)

    await http.get('/admin/ping', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    return true
  } catch (error) {
    return false
  }
}
