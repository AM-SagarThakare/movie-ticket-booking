import axios from "axios";
import { getToken } from "../services";
import toast from 'react-hot-toast'

const service = axios.create({
  baseURL: "http://localhost:8022",
});

service.interceptors.request.use((req) => {
  if (req.url.includes("user")) {
    req.headers.Authorization = `Bearer ${getToken("token")}`;
  }

  return req;
});

service.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err?.response?.data?.message);
    toast.error(err?.response?.data?.message)
    return Promise.reject(err);
  }
);

export default service;
