<template>
  <div class="scores">
    <div class="scores-container">
      <Toolbar style="background: transparent">
        <template #start>
          <h1>Vos scores</h1>
        </template>
      </Toolbar>

      <div class="score-wrapper" v-if="!isLoadingData">
        <div class="card" v-for="score in scores" :key="score.id">
          <div class="card-content">
            <div style="display: flex">
              <div class="card-quizz">
                <span><b>Référence quizz:</b> {{ score.quizzId }}</span>
              </div>
              <div class="card-grade">
                <span><b>Note:</b> {{ score.grade }}</span>
              </div>
            </div>
            <router-link :to="{ name: 'Score', params: { id: score.id } }">
              <Button label="Voir les résultats" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scoreController from "@/controllers/score.controller";

export default {
  data() {
    return {
      isLoadingData: false,
      scores: [
        {
          goodAnswers: [
            "61a4d5bb1c89291b665d3d04",
            "61a4d5bb91aa88ae4075b501",
            "61a4d5bba2821658d33df15d",
            "61a4d5bba3bfc4aeda0b098f",
            "61a4d5bbd091c0b4fb9ab9a9",
            "61a4d5bbe518709f73f959b1",
          ],
          badAnswers: [
            "61a4d5bb4084fa62402bc9b6",
            "61a4d5bb409ee3a01f55ba97",
            "61a4d5bb67346e23746802cb",
            "61a4d5bb82d2dc3e853b7a5e",
            "61a4d5bba4adee87ad3845a8",
            "61a4d5bbb24bc7f72ddcf3a5",
            "61a4d5bbb865ffafe4345311",
            "61a4d5bbbe4c733b72e222a9",
            "61a4d5bbc782af8083f7b93f",
            "61a4d5bbd18d5df04e60d3e5",
            "61a4d5bbd97fe96869454fed",
            "61a4d5bbe23ef7a9f01b8143",
            "61a4d5bbe513b25ff51e8fab",
            "61a4d5bbf5b96c8a0d715205",
          ],
          id: "1310f0c2-d61f-4551-958b-587a39b60dae",
          grade: "6/20",
          userId: "61a0ad211fd0b119f5c3adad",
          quizzId: "61a4d5bbec72bc2b08430efb",
          createdAt: "2021-11-30T14:52:35.000Z",
          updatedAt: "2021-11-30T14:52:35.000Z",
        },
        {
          goodAnswers: [
            "61a4d5bb1c89291b665d3d04",
            "61a4d5bb91aa88ae4075b501",
            "61a4d5bba2821658d33df15d",
            "61a4d5bba3bfc4aeda0b098f",
            "61a4d5bbd091c0b4fb9ab9a9",
            "61a4d5bbe518709f73f959b1",
          ],
          badAnswers: [
            "61a4d5bb4084fa62402bc9b6",
            "61a4d5bb409ee3a01f55ba97",
            "61a4d5bb67346e23746802cb",
            "61a4d5bb82d2dc3e853b7a5e",
            "61a4d5bba4adee87ad3845a8",
            "61a4d5bbb24bc7f72ddcf3a5",
            "61a4d5bbb865ffafe4345311",
            "61a4d5bbbe4c733b72e222a9",
            "61a4d5bbc782af8083f7b93f",
            "61a4d5bbd18d5df04e60d3e5",
            "61a4d5bbd97fe96869454fed",
            "61a4d5bbe23ef7a9f01b8143",
            "61a4d5bbe513b25ff51e8fab",
            "61a4d5bbf5b96c8a0d715205",
          ],
          id: "9904601b-c94d-413a-8221-594001a6ccb1",
          grade: "6/20",
          userId: "61a0ad211fd0b119f5c3adad",
          quizzId: "61a4d5bbec72bc2b08430efb",
          createdAt: "2021-11-30T14:16:57.000Z",
          updatedAt: "2021-11-30T14:16:57.000Z",
        },
      ],
    };
  },

  created() {
    scoreController.getScores().then((scores) => {});
  },

  methods: {},
};
</script>

<style scoped>
.scores-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin: 0;
  text-align: left;
}

.card {
  margin: 1rem 0;
  padding: 2rem;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-grade {
  margin-left: 1rem;
}
</style>
