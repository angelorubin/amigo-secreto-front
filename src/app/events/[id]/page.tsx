import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import * as http from "@/utils/api/site";
import useSWR from "swr";

// const fetcher = url => fetch(url).then(res => res.data)
const eventItem = async (id: number) => await http.retrieveEvent(id);

type EventProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: EventProps) {
  const res = await eventItem(parseInt(params.id));
  const cpf = await http.retrieveCPF(1, "1");

  if (!eventItem) {
    return redirect("/");
  } else {
    return (
      <>
        <div className="flex-col justify-center content-center border">
          <h1 className="text-yellow-600">Amigo Secreto</h1>
          <h1 className="text-white text-xl">Dados do Evento</h1>
          <h1 className="text-white text-sm mb-5">{res.title}</h1>
        </div>
        <pre>{JSON.stringify(cpf, null, 2)}</pre>
      </>
    );
  }
}
