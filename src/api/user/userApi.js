import api from "../api";

const URLS = {
  getUserInfo: "/getUserInfo",
  updateUser: "/updateUser",
};

const getUserInfo = (body) => {
  return api.post(URLS.getUserInfo, body);
};




const updateUser = async (body) => {
  const result = {
    response: true
  }
  try {

    const {
      data
    } = await api.post(URLS.updateUser, body);
    console.log(data);

  } catch (error) {
    console.error(error)
    result.response = false;


  } finally {
    return result;
  };

};


export {
  getUserInfo,
  updateUser
};