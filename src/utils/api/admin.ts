"use server";
import { http } from "@/utils/api/axios";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

// Admin Login
export const login = async (email: string, password: string) => {
  try {
    const json = await http.post("/admin/login", { email, password });
    return (json.data.token as string) ?? false;
  } catch (error) {
    return false;
  }
};

// Admin Events
export const getEvents = async () => {
  try {
    const json = await http("/admin/events")

    return json.data.events ?? [];
  } catch (error) {
    return false;
  }
};
