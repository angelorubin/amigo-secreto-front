import { redirect } from "next/navigation"
import { verifyToken, delCookie } from "@/utils/api/server"
import { useCustomSWR } from "../hooks/useCustomSWR"
import Loading from "../components/shared/loading"
import Logout from './logout'

const fetchData = async () => await verifyToken()

export default async function Page() {
  // const { data, error, isLoading } = useCustomSWR('/admin/ping', fetchData)
  const data = await verifyToken()

  const logout = async () => {
    'use server'
    delCookie('token')
    redirect('/admin/login')
  }

  if (!data) {
    // redirect('/admin/login')
  }

  // if (isLoading) return <Loading />

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <h1> Painel ADM</h1>
      <Logout logout={logout} />
    </>
  )
}
