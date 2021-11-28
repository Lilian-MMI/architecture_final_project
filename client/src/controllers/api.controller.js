import axiosApi from "./axios.config";

export default {
  async login(user) {
    return axiosApi.post("users/login", user);
  },

  async register(user) {
    return axiosApi.post("users/register", user);
  },
};
