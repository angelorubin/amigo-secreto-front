'use client'
import { redirect } from 'next/navigation'
import { pingAdmin } from '@/utils/api/server'
import { useCustomSWR } from '../hooks/useCustomSWR'
import Loading from '../components/shared/loading'

const fetchData = async () => await pingAdmin()

export default function Page() {
  const { data, error, isLoading } = useCustomSWR('/admin/ping', fetchData, { revalidateOnReconnect: true })

  if (isLoading) return <Loading />

  if (!data) {
    return redirect('/admin/login')
  }

  /**
  if (false) {
    return ('Loading ...')
  }

    if (!isValid) {
      redirect('/admin/login')
    }
    */

  else {
    return (
      <>
        <pre>{JSON.stringify(data)}</pre>
        <h1> Painel ADM</h1>
      </>
    )
  }
}
