import api from "../api";

const URLS = {
  getUserInfo: "/getUserInfo",
};

const getUserInfo = (body) => {
  return api.post(URLS.getUserInfo, body);
};

export { getUserInfo };
