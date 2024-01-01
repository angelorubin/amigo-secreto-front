"use client";
import { useState } from "react";
import SearchForm from "@/app/components/site/SearchForm";
import SearchResult from "@/app/components/site/SearchResult";
import * as api from "@/utils/api/site";

type SearchProps = {
  id: number;
};

export default function Search({ id }: SearchProps) {
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchButton = async (cpf: string) => {
    if (!cpf) return;

    setLoading(true);

    const res = await api.retrieveCPF(id, cpf);

    console.log(res);

    setLoading(false);

    if (!res) {
      alert("CPF não encontrado.");
    }

    setResults(res);
  };

  return (
    <section className="bg-gray-900 p-5 rounded">
      {!results && (
        <SearchForm loading={loading} onSearchButton={handleSearchButton} />
      )}

      {results && <SearchResult res={results} />}
    </section>
  );
}
