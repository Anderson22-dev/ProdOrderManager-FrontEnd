import axios from "axios";

export const configApi = axios.create({ baseURL: "http://localhost:8080" });
