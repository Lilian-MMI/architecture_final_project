<template>
  <div>home</div>
</template>

<script>
import gameController from "@/controllers/game.controller";

export default {
  data() {
    return {
      quizzs: [],
    };
  },
  created() {
<<<<<<< HEAD
    //await apiController.getQuizzs().then(({ data }) => (quizzs = data));
=======
    gameController.getQuizzs().then(({ data }) => (quizzs = data));
>>>>>>> bcb56e2c0915573053610dbccc1fcf1b95f8e811
  },
  methods: {},
};
</script>

<style scoped></style>
