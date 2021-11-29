<template>
  <div class="quizz">
    <div class="quizz-container">
      <Toolbar style="background: transparent">
        <template #start>
          <h1>Quizz numéro {{ $route.params.id }}</h1>
        </template>
      </Toolbar>

      <div class="question-wrapper">
        <div class="card" v-for="question in questions" :key="question._id">
          {{ question.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          _id: "61a4d5bb1c89291b665d3d04",
          title: "Snakes are this kind of animals.",
          answer: "Carnivorous",
          choice1: "Herbivorous",
          choice2: "Omnivorous",
          choice3: "Carnivorous",
          choice4: "Vegetarian",
        },
        {
          _id: "61a4d5bb4084fa62402bc9b6",
          title:
            "The Cobra is at the top of the food chain, with only two main predators -- one is man and the other is this animal.",
          answer: "Mongoose",
          choice1: "Jackal",
          choice2: "Mongoose",
          choice3: "Lynx",
          choice4: "Eagle",
        },
        {
          _id: "61a4d5bb409ee3a01f55ba97",
          title:
            "Cobras are venomous snakes of family Elapidae, that generally inhabit regions of these two continents.",
          answer: "Asia and Africa",
          choice1: "South America and Asia",
          choice2: "Asia and Africa",
          choice3: "Asia and Australia",
          choice4: "South America and Australia",
        },
        {
          _id: "61a4d5bb67346e23746802cb",
          title: "These are typical Australian animals except one.",
          answer: "Sloth",
          choice1: "Platypus",
          choice2: "Dingo",
          choice3: "Echidna",
          choice4: "Sloth",
        },
        {
          _id: "61a4d5bb82d2dc3e853b7a5e",
          title:
            "All of these animals have large ears (relative to their size) except one.",
          answer: "Polar bears",
          choice1: "Polar bears",
          choice2: "Foxes",
          choice3: "Bats",
          choice4: "Elephants",
        },
        {
          _id: "61a4d5bb91aa88ae4075b501",
          title: "This percentage of all snakes on Earth are lethal to humans.",
          answer: "15%",
          choice1: "10%",
          choice2: "20%",
          choice3: "15%",
          choice4: "25%",
        },
        {
          _id: "61a4d5bba2821658d33df15d",
          title: "All dogs, cats and birds are colorblind.",
          answer: "False",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bba3bfc4aeda0b098f",
          title: "Snakes belong to the following category.",
          answer: "Reptiles",
          choice1: "Invertebrates",
          choice2: "Lizards",
          choice3: "Reptiles",
          choice4: "Mammals",
        },
        {
          _id: "61a4d5bba4adee87ad3845a8",
          title: "A specialist in snakes is called one of these.",
          answer: "Ophiologist",
          choice1: "Pisciculturist",
          choice2: "Ornithologist",
          choice3: "Ophiologist",
          choice4: "Herpetologist",
        },
        {
          _id: "61a4d5bbb24bc7f72ddcf3a5",
          title:
            "Snakes are very likely to attack us, regardless of whether they feel threatened or not.",
          answer: "False",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbb865ffafe4345311",
          title: "All of these animals are omnivorous except one.",
          answer: "Snail",
          choice1: "Fox",
          choice2: "Mouse",
          choice3: "Opossum",
          choice4: "Snail",
        },
        {
          _id: "61a4d5bbbe4c733b72e222a9",
          title: "Snakes consume their food by means of this process.",
          answer: "Swallowing",
          choice1: "Breathing",
          choice2: "Absorption",
          choice3: "Swallowing",
          choice4: "Chewing",
        },
        {
          _id: "61a4d5bbc782af8083f7b93f",
          title: "Three of these species shed their skin. Which one does not?",
          answer: "Penguins",
          choice1: "Penguins",
          choice2: "Snakes",
          choice3: "Insects",
          choice4: "Crustaceans",
        },
        {
          _id: "61a4d5bbd091c0b4fb9ab9a9",
          title: "Snakes reproduce only by laying eggs.",
          answer: "False",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbd18d5df04e60d3e5",
          title:
            "Three of these Latin names are names of bears. Which is the odd one?",
          answer: "Felis silvestris catus",
          choice1: "Melursus ursinus",
          choice2: "Helarctos malayanus",
          choice3: "Ursus minimus",
          choice4: "Felis silvestris catus",
        },
        {
          _id: "61a4d5bbd97fe96869454fed",
          title:
            "The cobras most recognizable feature is its hood, a flap of skin and muscle behind the head, believed to serve this purpose.",
          answer: "More threatening appearance",
          choice1: "Balance control",
          choice2: "Heat collection from sun rays",
          choice3: "Camouflage",
          choice4: "More threatening appearance",
        },
        {
          _id: "61a4d5bbe23ef7a9f01b8143",
          title: "Snake skin is covered in scales.",
          answer: "True",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbe513b25ff51e8fab",
          title: "Snakes are deaf.",
          answer: "True",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbe518709f73f959b1",
          title:
            "Representatives of three of these species produce venom of their own. Which is the odd species?",
          answer: "Mosquitos",
          choice1: "Lizards",
          choice2: "Scorpions",
          choice3: "Frogs",
          choice4: "Mosquitos",
        },
        {
          _id: "61a4d5bbf5b96c8a0d715205",
          title:
            "One of the following snakes does not belong to the Viperidae family.",
          answer: "Grass snake",
          choice1: "Horned adder",
          choice2: "Grass snake",
          choice3: "Viper",
          choice4: "Asp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.quizz-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
