import { getCookie } from "cookies-next"
import { cookies, headers } from "next/headers"
import { http } from './axios'

export const pingAdmin = async () => {
  try {
    const token = getCookie('token', { cookies })
    await http('/admin/ping', {
      headers: {
        Authorization: `${token}`
      }
    })

    return true
  } catch (error) {
    return false
  }
}
