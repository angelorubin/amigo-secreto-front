"use client"
import { deleteCookie, getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { verifyToken } from "@/utils/api/server"
import { useCustomSWR } from "../hooks/useCustomSWR"
import Loading from "../components/shared/loading"

const fetchData = async () => verifyToken()

export default function Page() {
  const router = useRouter()
  const { data, error, isLoading } = useCustomSWR('/admin/ping', fetchData, {
    revalidateOnFocus: true
  })

  const logout = () => {
    deleteCookie("token")
    router.push('/admin/login')
  }

  if (!data) {
    router.push('/admin/login')
  }

  if (isLoading) return <Loading />

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <h1> Painel ADM</h1>
      <button
        onClick={logout}>
        sair
      </button>
    </>
  )
}
