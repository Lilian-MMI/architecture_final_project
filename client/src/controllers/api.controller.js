import axiosApi from "./axios.config";

export default {
  async login(user) {
    return axiosApi.post("http://localhost:8080/users/login", user);
  },
};
