import api from "../api";

const URLS = {
  register: "/register",
};

export const handleRegister = (body) => {
  return api.post(URLS.register, body);
};
