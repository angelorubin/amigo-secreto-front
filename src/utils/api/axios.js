import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  Headers: {
    'Content-Type': 'application/json'
  }
})
