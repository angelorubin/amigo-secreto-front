type Props = {
  text?: string
  className?: string
  onClick: any
  disabled?: boolean
  value?: string
}

export default function Button(props: Props) {
  const { onClick, disabled, text, className, value } = props
  return (<button className={className} onClick={onClick}>{text}</button>)
}
