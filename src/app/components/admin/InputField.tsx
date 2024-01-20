import { ChangeEvent } from "react"

type Props = {
  type?: 'text' | 'password'
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  errorStatus?: boolean
  errorMessage?: string
  className?: string
  id: string
  name?: string
}

export default function InputField(props: Props) {
  const { id, type, value, onChange, errorStatus, placeholder, disabled, errorMessage } = props

  return (
    <div>
      <input
        id={id}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        type={type || 'text'}
        className={`
        ${errorStatus ? 'border-b-2 border-b-red-600' : 'border-b-2 focus:border-b-white'}
        w-full
        block
        text-lg
        p-3
        outline-none
        rounded
        bg-gray-800
        text-white
        `}
      />
      {errorStatus ? <div className="text-right text-sm text-red-600">
        {errorMessage}
      </div> :
        null}
    </div>
  )
}
