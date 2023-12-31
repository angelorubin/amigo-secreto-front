"use client";
import { useState } from "react";
import SearchForm from "@/app/components/site/SearchForm";
import * as http from "@/utils/api/site";

type SearchProps = {
  id: number;
};

export default function Search({ id }: SearchProps) {
  const [results, setResults] = useState();

  const handleSearchButton = async (cpf: string) => {
    if (!cpf) return;
    const res = await http.retrieveCPF(id, cpf);
    if (!res) return alert("CPF não encontrado.");
    setResults(res);
  };

  return (
    <section className="bg-gray-9000 p-5 rounded">
      {!results && <SearchForm onSearchButton={handleSearchButton} />}
      {/* {res && <SearchReveal res={res} />} */}
    </section>
  );
}
