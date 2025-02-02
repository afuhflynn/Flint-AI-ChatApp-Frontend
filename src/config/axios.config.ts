import axios from "axios";
import { backendBaseUrl } from "../constants/constants";

export const privateAxios = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true, // Configure axios to send and receive cookies
});
