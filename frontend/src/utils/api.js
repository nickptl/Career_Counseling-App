import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const userLogin = (credentials) => API.post("/auth/login", credentials);
export const fetchCareers = () => API.get("/careers");
