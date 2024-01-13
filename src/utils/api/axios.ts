import axios from "axios";

export const http = axios.create({
  baseURL: process.env.URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});
