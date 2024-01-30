"use server";
import { getCookie, deleteCookie } from "cookies-next";
import { http } from "./axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const verifyToken = async () => {
  try {
    const token = getCookie("token", { cookies });

    if (!token) {
      // Se o cookie não estiver presente, redirecione para a página de login
      redirect("/admin/login");
    }

    await http("/admin/ping", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};

export const delCookie = async (cookieName: string) => {
  deleteCookie(cookieName, { cookies });
};

export const setCookie = (cookieKey: string, cookieValue: any) => {
  setCookie(cookieKey, cookieValue);
};
