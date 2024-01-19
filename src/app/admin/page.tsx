import * as apiServer from '@/utils/api/server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const logged = await apiServer.pingAdmin()

  if (!logged) {
    return redirect('/admin/login')
  }

  return (<h1>Painel ADM</h1>)
}
