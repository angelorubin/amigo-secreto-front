import { ChangeEvent } from "react"

type Props = {
  type?: 'text' | 'password'
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  errorMessage?: string
  className?: string
  id: string
  name?: string
}

export const InputField = (props: Props) => {
  const { id, type, value, onChange, placeholder, disabled, errorMessage } = props

  return (
    <div>
      <input
        id={id}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        type={type}
        className={`border-b-2 ${errorMessage ? 'border-red-600' : 'border-gray-900'} w-full block text-lg p-3 outline-none rounded bg-gray-900 text-white`}
      />
      {errorMessage && <div className="">{errorMessage}</div>}
    </div>
  )
}
