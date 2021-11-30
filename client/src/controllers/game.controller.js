import axiosApi from "./axios.config";

export default {
  async getQuizzs(params) {
    return await axiosApi.get("games", { params });
  },

  async getQuizz(gameId) {
    return await axiosApi.get(`games/${gameId}`);
  },

  async checkAnswers(answers) {
    return await axiosApi.post(`games/answer`, answers);
  },
};
