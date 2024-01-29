"use server";
import { http } from "@/utils/api/axios";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export const login = async (email: string, password: string) => {
  try {
    const json = await http.post("/admin/login", { email, password });
    return (json.data.token as string) ?? false;
  } catch (error) {
    return false;
  }
};

// Events
export const getEvents = async () => {
  try {
    const token = getCookie("token");

    const json = await http.get("/admin/events", {
      headers: {
        Authorization: `Bearer ${token}}`,
      },
    });

    return json.data.events ?? [];
  } catch (error) {
    return false;
  }
};
