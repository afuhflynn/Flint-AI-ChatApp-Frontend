import axios from "axios";

export const privateAxios = axios({
  withCredentials: true,
});
