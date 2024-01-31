"use client"
import useSWR from 'swr'
import { getEvents } from "@/utils/api/admin";
import Loading from "../shared/loading";
import { CustomCheckbox } from "../shared/custom-checkbox";
import Logout from '../shared/logout';

export default function AdminPage() {
  const { data, isLoading } = useSWR(['get-events', '/admin/events'], getEvents)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="grid flex-col gap-4 w-screen">
      <Logout />
      <h1 className="text-white text-3xl">Eventos</h1>
      <div className="mt-3">
        <table className="table-auto">
          <thead className="border-b-2">
            <tr className="">
              <th>ID</th>
              <th>Status</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Agrupado?</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="">
            {!isLoading &&
              data.length > 0 &&
              data.map((item: any) => (
                <tr className="border-b">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">
                    {item.status ? 'ativado' : 'desativado'}
                  </td>
                  <td className="text-sm whitespace-wrapper p-2">{item.title}</td>
                  <td className="p-2">{item.description}</td>
                  <td className="p-2">
                    <input type="checkbox" checked={item.grouped} className="hidden" />
                    <CustomCheckbox checked={item.grouped} />
                  </td>
                  <td>
                    <button className="bg-red-400 text-black m-1 p-1">excluir</button>
                    <button className="bg-green-400 text-black m-1 p-1">editar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}
