"use client";
import { escapeCPF } from "@/utils/escapeCPF";
import { useState } from "react";

type SearchFormProps = {
  onSearchButton: (cpf: string) => void;
  loading: boolean;
};

export default function SearchForm({
  onSearchButton,
  loading,
}: SearchFormProps) {
  const [cpfInput, setCpfInput] = useState("");

  return (
    <div className="grid text-xl gap-2 items-center justify-center">
      <p className="text-center text-md">Qual seu CPF?</p>

      <input
        name="cpf"
        type="text"
        placeholder="digite seu CPF"
        inputMode="numeric"
        className="w-full py-2 px-2 bg-white text-center text-md outline-none rounded text-black disabled:opacity-20"
        value={cpfInput}
        onChange={(e) => setCpfInput(escapeCPF(e.target.value))}
        autoFocus
        disabled={loading}
      />

      <button
        disabled={loading}
        onClick={() => onSearchButton(cpfInput)}
        className="w-full bg-blue-800 py-2 px-2 text-white text-md rounded">
        {loading ? "Buscando..." : "Entrar"}
      </button>
    </div>
  );
}
