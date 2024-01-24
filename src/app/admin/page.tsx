import * as api from '@/utils/api/server'
import { redirect } from 'next/navigation'

const Page = async () => {
  const logged = await api.pingAdmin()

  if (!logged) {
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

  return (
    <>
      <pre className='text-white'>{JSON.stringify('data')}</pre>
      <h1> Painel ADM</h1>
    </>
  )
}

export default Page
