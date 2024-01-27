"use client"
import { setCookie } from 'cookies-next';
import { ReactNode, MouseEvent } from 'react';
import InputField from "@/app/components/admin/InputField"
import Button from "@/app/components/admin/Button"
import { useState, ChangeEvent } from "react"
import { login } from "./actions"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ status: false, message: '' })
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id
    const value = event.currentTarget.value

    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }))
  }

  const handleClick = async (event: MouseEvent<ReactNode>) => {
    event.preventDefault()

    if (inputValues.password) {
      const token = await login('', inputValues.password)

      if (!token) {
        setAlert({ status: true, message: "acesso negado" })

        setInterval(() => {
          setAlert({ status: false, message: "" })
        }, 3000)

        setInputValues((prevVal) => {
          return {
            ...prevVal,
            password: "",
          }
        })
      }
      else {
        // setAlert({ status: false, message: '' })
        setCookie('token', token)
        router.push("/admin")
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

        {alert.status ? (
          <div className="grid justify-center border border-dashed text-red-700 border-red-400 p-3">
            {alert.message}
          </div>
        ) : null}
      </form>
    </div>
  )
}
