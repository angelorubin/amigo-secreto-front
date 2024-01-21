type Props = {
  text?: string
  className?: string
  onClick: () => void
  disabled?: boolean
}

export default function Button(props: Props) {
  const { onClick, disabled, text, className } = props
  return (<button className={className} onClick={onClick}>{text}</button>)
}
