'use client'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { pingAdmin } from '@/utils/api/server'

export default async function Page() {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      await pingAdmin().then(res => res)
    }

    const res = fetchData()

    setIsLogged(res)

    /**
    const realizarPing = async () => {
      try {
        // Chame a função pingAdmin no lado do cliente
        const sucesso = await pingAdmin();

        console.log(sucesso)

        // Faça algo com o resultado, se necessário
        if (sucesso) {
          console.log('Ping para o admin bem-sucedido!');
        } else {
          console.error('Erro ao pingar o admin.');
        }
      } catch (erro) {
        console.error('Erro ao executar pingAdmin:', erro);
      }
    }

    realizarPing()
    */
  }, [])


  if (!isLogged) {
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
      <pre className='text-white'>{JSON.stringify(isLogged)}</pre>
      <h1> Painel ADM</h1>
    </>
  )
}
