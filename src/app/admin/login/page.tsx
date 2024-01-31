"use client";
import { setCookie } from "cookies-next";
import { ReactNode, MouseEvent } from "react";
import InputField from "@/app/components/admin/InputField";
import Button from "@/app/components/admin/Button";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import * as api from "@/utils/api/admin";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ status: false, message: "" });
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;

    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleClickLogin = async (event: MouseEvent<ReactNode>) => {
    event.preventDefault();

    if (inputValues.password) {

      const token = await api.login("", inputValues.password);

      setLoading(true)

      if (!token) {
        setAlert({ status: true, message: "Acesso Negado!" });

        setInterval(() => {
          setLoading(false)
          setAlert({ status: false, message: "" });
        }, 2000);

        setInputValues((prevVal) => {
          return {
            ...prevVal,
            password: "",
          };
        });
      } else {
        setLoading(false)
        setCookie("token", token);
        router.push("/admin")
      }
    }
  };

  return (
    <div className="w-full my-3 border-1">
      <h1 className="mb-3 font-bold text-xl">Login</h1>

      <form className="grid gap-3 mb-3">
        <InputField
          id="email"
          type="text"
          value={inputValues.email}
          onChange={handleChange}
          placeholder="email"
          errorMessage={"email inválido"}
        />

        <InputField
          id="password"
          type="password"
          value={inputValues.password}
          onChange={handleChange}
          placeholder="senha"
          errorMessage={"password inválido"}
        />

        <Button
          onClick={handleClickLogin}
          disabled={loading}
          className="my-3 p-3 rounded font-bold hover:bg-gray-600 bg-gray-700"
          text={loading ? 'carregando...' : 'entrar'}
        />

        {alert.status ? (
          <div className="grid justify-center border border-dashed text-white border-red-400 p-3">
            {alert.message}
          </div>
        ) : null}
      </form>
    </div>
  );
}
