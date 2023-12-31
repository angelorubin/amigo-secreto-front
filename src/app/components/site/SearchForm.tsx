"use client";
import { escapeCPF } from "@/utils/escapeCPF";
import { useState } from "react";

type SearchFormProps = {
  onSearchButton: (cpf: string) => void;
};

export default function Search({ onSearchButton }: SearchFormProps) {
  const [res, setRes] = useState();
  const [cpfInput, setCpfInput] = useState("");

  return (
    <div className="flex-col gap-2 text-xl items-center justify-center">
      <p className="text-center text-sm">Qual seu CPF?</p>
      <input
        type="text"
        placeholder="digite seu CPF"
        className="w-full p-1 bg-white text-center text-xs outline-none rounded text-black"
        value={cpfInput}
        onChange={(e) => setCpfInput(escapeCPF(e.target.value))}
        autoFocus
      />
      <button
        onClick={onSearchButton}
        className="w-full bg-blue-800 p-2 mt-2 text-white text-xs rounded">
        Entrar
      </button>
    </div>
  );
}
