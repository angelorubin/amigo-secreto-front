import { redirect } from "next/navigation"
import * as http from "@/utils/api/site"
import Search from "@/app/components/site/Search"
import useSWR from 'swr'

type EventProps = {
  params: {
    id: string
  }
}

export default async function Page({ params }: EventProps) {

  const event: any = await http.retrieveEvent(parseInt(params.id))

  if (!event || !event.status) {
    // return redirect("/")
  }

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex-col w-1/3">
        <main className="flex-col">
          <header className="flex-col gap-5 justify-center items-center">
            <h1 className="text-yellow-600 text-5xl text-center mt-2">
              Amigo Secreto
            </h1>
            <h1 className="text-white text-md mb-5 mt-2 text-center">
              {event.title}
            </h1>
            <p className="text-center text-xs mb-3">{event.description}</p>
          </header>
        </main>

        <Search id={event.id} />

        <footer className="text-center text-sm mt-3">
          © Criado por Angelo Rubin - 2024
        </footer>
      </div>
    </div>
  )
}
