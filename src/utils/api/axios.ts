'use server'
import axios from "axios";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const token = getCookie("token", { cookies });

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  },
});
