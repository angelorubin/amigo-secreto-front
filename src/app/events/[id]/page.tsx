import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import * as http from "@/utils/api/site";
import useSWR from "swr";
import Search from "@/app/components/site/Search";

// const fetcher = url => fetch(url).then(res => res.data)
const eventItem = async (id: number) => await http.retrieveEvent(id);

type EventProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: EventProps) {
  const res = await eventItem(parseInt(params.id));
  const cpf = await http.retrieveCPF(parseInt(params.id), "1");

  if (!eventItem) {
    return redirect("/");
  } else {
    return (
      <div>
        <main className="flex-col">
          <header className="flex-col gap-5 justify-center items-center">
            <h1 className="text-yellow-600 text-4xl text-center mt-2">
              Amigo Secreto
            </h1>
            <h1 className="text-white text-md mb-5 mt-2 text-center">
              {res.title}
            </h1>
          </header>
        </main>
        <Search id={res.id} />
        <footer>Criado por Angelo Rubin - 2024</footer>
        <pre>{JSON.stringify(cpf, null, 2)}</pre>
      </div>
    );
  }
}
