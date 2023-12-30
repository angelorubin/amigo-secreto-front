'use client'
import { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.data)

type EventProps = {
  params: {
    id: string
  }
}

export default function Page({ params }: EventProps) {
  const { id } = params
  const [events, setEvents] = useState(null)
  const { data, error } = useSWR('http://localhost:/3001/site/events/1', fetcher)

  return <>
    <h1>Event Page</h1>
    <span>ID:</span> {id}
    <pre className='text-gray-400'>{JSON.stringify(data, null, 2)}</pre>
  </>
}
