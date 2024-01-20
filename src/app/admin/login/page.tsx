'use client'
import InputField from "@/app/components/admin/InputField"
import Button from '@/app/components/admin/Button'
import { useState, ChangeEvent } from "react"

export default function Page() {
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

  return (
    <div className="w-full my-3">
      {JSON.stringify(inputValues)}
      <h1 className="mb-3">Painel Admin - Login</h1>
      <form className="grid gap-3 mb-3">
        <InputField
          id="email"
          type="text"
          value={inputValues.email}
          onChange={handleChange}
          placeholder="email"
          errorStatus={false}
          errorMessage={'e-mail inválido'}
        />

        <InputField
          id="password"
          type="password"
          value={inputValues.password}
          onChange={handleChange}
          placeholder="password"
          errorStatus={true}
          errorMessage={'e-mail inválido'}
        />

        <Button className="text- bg-blue-500 py-3 font-bold" text="Entrar" />
      </form>
    </div>
  )
}
