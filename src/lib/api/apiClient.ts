import axios from "axios";

const token: string | null = localStorage.getItem("token");

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: token as string },
});
