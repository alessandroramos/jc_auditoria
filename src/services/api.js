import axios from "axios";

const api = axios.create({
  baseURL: "https://jcapp-275121.uc.r.appspot.com"
});

export default api;