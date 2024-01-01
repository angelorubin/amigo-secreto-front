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
    <div className="flex-col gap-2 text-xl items-center justify-center">
      <p className="text-center text-sm">Qual seu CPF?</p>

      <input
        type="text"
        placeholder="digite seu CPF"
        inputMode="numeric"
        className="w-full p-2 bg-white text-center text-xs outline-none rounded text-black disabled:opacity-20"
        value={cpfInput}
        onChange={(e) => setCpfInput(escapeCPF(e.target.value))}
        autoFocus
        disabled={loading}
      />

      <button
        disabled={loading}
        onClick={() => onSearchButton(cpfInput)}
        className="w-full bg-blue-800 p-2 mt-2 text-white text-xs rounded">
        {loading ? "Buscando..." : "Entrar"}
      </button>
    </div>
  );
}
