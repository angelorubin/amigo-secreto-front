'use client'
import { verifyToken } from './actions'
import { useRouter } from 'next/navigation'

async function VerifyToken() {
  const res = await verifyToken()
  return res
}

export default async function Page() {
  const isLogged = await VerifyToken()
  const router = useRouter()

  if (!isLogged) {
    router.push('/admin/login')
  }

  return (
    <h1>Painel ADM</h1>
  )
}
