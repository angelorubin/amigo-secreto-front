type EventProps = {
  params: {
    id: string
  }
}

export default function Event({ params }: EventProps) {
  const { id } = params

  return <>
    <h1>Event Page</h1>
    <span>ID:</span> {id}
  </>
}
