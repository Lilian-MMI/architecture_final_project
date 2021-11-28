import axiosApi from "./axios.config";

export default {
  async getQuizzs() {
    return await axiosApi.get("games");
  },

  async getQuizz(gameId) {
    return await axiosApi.get(`games/${gameId}`);
  },

  async checkAnswers() {
    return await axiosApi.post(`games/answer`);
  },
};
