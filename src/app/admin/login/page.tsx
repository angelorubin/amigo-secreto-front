'use client'
import InputField from "@/app/components/admin/InputField"
import Button from '@/app/components/admin/Button'
import { useState, ChangeEvent, ReactEventHandler, EventHandler } from "react"
import { login } from "@/utils/api/admin";
import { redirect, useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState('');
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id
    const value = event.currentTarget.value

    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }))
  }

  const handleClick = async (e: Event) => {
    e.preventDefault()

    if (inputValues.password) {
      setWarning('')
      setLoading(true)
      const token = await login(inputValues.email, inputValues.password);

      if (!token) {
        setWarning('Acesso negado!')
        setTimeout(() => {
          setLoading(false)
          setInputValues(prevVal => {
            return {
              ...prevVal,
              password: ''
            }
          })
        }, 2000)
      } else {
        setCookie('token', token)
        router.push('/admin')
      }
    }
  }

  return (
    <div className="w-full my-3 border-1">
      <h1 className="mb-3 font-bold text-xl">Painel Admin - Login</h1>
      <p className="my-3">Qual a senha secreta?</p>
      <form className="grid gap-3 mb-3">
        <InputField
          id="password"
          type="password"
          value={inputValues.password}
          onChange={handleChange}
          placeholder="password"
          errorMessage={"password inválido"}
        />

        <Button
          onClick={handleClick}
          disabled={loading}
          className="my-3 p-3 rounded font-bold hover:bg-gray-600 bg-gray-700"
          text="Entrar"
        />

        {loading && <div className="border border-dashed border-gray-400 p-3">{warning}</div>}
      </form>
    </div>
  );
}
