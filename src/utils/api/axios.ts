import axios from "axios";
import { getCookie } from "cookies-next";

const token = JSON.stringify(getCookie("token"));

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});
