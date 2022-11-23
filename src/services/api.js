import axios from "axios";

const api = (url) => {
  return axios.get(url);
};

export default api;
