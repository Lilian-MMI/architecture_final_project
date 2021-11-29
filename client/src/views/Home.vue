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
    gameController.getQuizzs().then(({ data }) => (quizzs = data));
  },
  methods: {},
};
</script>

<style scoped></style>
