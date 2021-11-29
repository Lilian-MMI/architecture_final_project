<template>
  <div>home</div>
</template>

<script>
import apiController from "@/controllers/api.controller";

export default {
  data() {
    return {
      quizzs: [],
    };
  },
  created() {
    //await apiController.getQuizzs().then(({ data }) => (quizzs = data));
  },
  methods: {},
};
</script>

<style scoped></style>
