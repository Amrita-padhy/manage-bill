import axios from "axios";
const axiosParams = {
  baseURL: "https://us-central1-manage-billls.cloudfunctions.net/app",
};

const axiosInstance = axios.create(axiosParams);

// Main api function
const api = (axios) => {
  return {
    get: (endpoint, body, config) => axios.get(endpoint, body, config),
    delete: (endpoint, config) => axios.delete(endpoint, config),
    post: (endpoint, body, config) => axios.post(endpoint, body, config),
    patch: (endpoint, body, config) => axios.patch(endpoint, body, config),
    put: (endpoint, body, config) => axios.put(endpoint, body, config),
  };
};
export default api(axiosInstance);