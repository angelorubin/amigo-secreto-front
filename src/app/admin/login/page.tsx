'use client'
import { InputField } from "@/app/components/admin/InputField"
import { useState, ChangeEvent } from "react"
import { capitalizeFirstChar } from "@/utils/capitalize-first-char"

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
      <div className="grid gap-3 mb-3">
        <InputField
          id="email"
          type="text"
          value={inputValues.email}
          onChange={handleChange}
          placeholder="email"
        />

        <InputField
          id="password"
          type="password"
          value={inputValues.password}
          onChange={handleChange}
          placeholder="password"
        />
      </div>
    </div>
  )
}
