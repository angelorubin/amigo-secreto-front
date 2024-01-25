"use client"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { pingAdmin } from "@/utils/api/server"
import { useCustomSWR } from "../hooks/useCustomSWR"
import Loading from "../components/shared/loading"

const fetchData = async () => await pingAdmin()

export default function Page() {
  const router = useRouter()
  const { data, error, isLoading } = useCustomSWR("/admin/ping", fetchData, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateOnMount: true
  })

  const logout = () => {
    deleteCookie("token")
    router.push('/admin/login')
  }

  if (isLoading) return <Loading />

  if (!data) {
    router.push("/admin/login")
  }

  return (
    <>
      <h1> Painel ADM</h1>
      <button
        onClick={logout}>
        sair
      </button>
    </>
  )
}
