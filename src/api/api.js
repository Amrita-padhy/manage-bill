import axios from "axios";
const axiosParams = {
  baseURL: "https://us-central1-manage-billls.cloudfunctions.net/app",
};

const axiosInstance = axios.create(axiosParams);

// Main api function
const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    delete: (url, config) => axios.delete(url, config),
    post: (url, body, config) => axios.post(url, body, config, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    put: (url, body, config) => axios.put(url, body, config),
  };
};
export default api(axiosInstance);
