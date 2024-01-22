'use client'
import * as apiServer from '@/utils/api/server'
import { redirect } from 'next/navigation'
import { getCookie } from "cookies-next"

export default function Page() {
  const isLogged = getCookie("token");

  if (!isLogged) {
    redirect('/admin/login')
  }

  return (<h1>Painel ADM</h1>)
}
