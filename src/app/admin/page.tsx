'use client'
import { verifyToken } from './actions'
import useSWR from 'swr'
import { useRouter, redirect } from 'next/navigation'

const fetcher = url => verifyToken().then(res => res)

export default async function Page() {
  const { data, error } = useSWR('/admin/login', fetcher, { revalidateOnFocus: true })
  const router = useRouter()

  if (error) {
    router.push('/admin/login')
  }

  return (
    <h1>Painel ADM</h1>
  )
}
