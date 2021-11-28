import axiosApi from "./axios.config";

export default {
  async login(user) {
    return await axiosApi.post("users/login", user);
  },

  async register(user) {
    return await axiosApi.post("users/register", user);
  },
};
