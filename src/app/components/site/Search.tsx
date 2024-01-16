"use client";
import { useState } from "react";
import SearchForm from "@/app/components/site/SearchForm";
import SearchResult from "@/app/components/site/SearchResult";
import * as http from "@/utils/api/site";

type SearchProps = {
  id: number;
};

export default function Search({ id }: SearchProps) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchButton = async (cpf: string) => {
    try {
      if (!cpf) return;

      setLoading(true);

      let data = await http.retrievePersonByCPF(id, cpf);

      if (!data) {
        setLoading(false);
        alert("CPF não encontrado.");
      } else {
        setResults(data);
      }
    } catch (error) {
      console.error("Erro ao recuperar pessoa por CPF:", error);
      setLoading(false);
      alert("Ocorreu um erro ao recuperar a pessoa por CPF.");
    }
  };

  return (
    <section className="bg-gray-900 p-5 rounded">
      {!results ? (
        <SearchForm loading={loading} onSearchButton={handleSearchButton} />
      ) : (
        <SearchResult results={results} />
      )}
    </section>
  );
}
