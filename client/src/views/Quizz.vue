<template>
  <div class="quizz">
    <div class="quizz-container">
      <Toolbar style="background: transparent">
        <template #start>
          <h1>Quizz numéro {{ $route.params.id }}</h1>
        </template>
      </Toolbar>

      <div class="question-wrapper" v-if="!isLoadingData">
        <div class="card" v-for="question in questions" :key="question._id">
          <div class="card-header">
            <h3>{{ question.title }}</h3>
          </div>
          <div class="card-content">
            <div class="p-field-radiobutton" v-if="question.choice1">
              <RadioButton
                :id="question.choice1"
                name="choice"
                :value="question.choice1"
                v-model="question.answer"
              />
              <label :for="question.choice1">{{ question.choice1 }}</label>
            </div>
            <div class="p-field-radiobutton" v-if="question.choice2">
              <RadioButton
                :id="question.choice2"
                name="choice"
                :value="question.choice2"
                v-model="question.answer"
              />
              <label :for="question.choice2">{{ question.choice2 }}</label>
            </div>
            <div class="p-field-radiobutton" v-if="question.choice3">
              <RadioButton
                :id="question.choice3"
                name="choice"
                :value="question.choice3"
                v-model="question.answer"
              />
              <label :for="question.choice3">{{ question.choice3 }}</label>
            </div>
            <div class="p-field-radiobutton" v-if="question.choice4">
              <RadioButton
                :id="question.choice4"
                name="choice"
                :value="question.choice4"
                v-model="question.answer"
              />
              <label :for="question.choice4">{{ question.choice4 }}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="question-wrapper" v-else>
        <div class="card" v-for="question in new Array(20)" :key="question">
          <div class="card-header">
            <Skeleton />
          </div>
          <div class="card-content">
            <div class="p-field-radiobutton">
              <Skeleton shape="round" />
              <Skeleton />
            </div>
            <div class="p-field-radiobutton">
              <Skeleton shape="round" />
              <Skeleton />
              <label><Skeleton /></label>
            </div>
            <div class="p-field-radiobutton">
              <Skeleton shape="round" />
              <Skeleton />
              <label><Skeleton /></label>
            </div>
            <div class="p-field-radiobutton">
              <Skeleton shape="round" />
              <Skeleton />
              <label><Skeleton /></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoadingData: false,
      questions: [
        {
          _id: "61a4d5bb1c89291b665d3d04",
          title: "Snakes are this kind of animals.",
          answer: "",
          choice1: "Herbivorous",
          choice2: "Omnivorous",
          choice3: "Carnivorous",
          choice4: "Vegetarian",
        },
        {
          _id: "61a4d5bb4084fa62402bc9b6",
          title:
            "The Cobra is at the top of the food chain, with only two main predators -- one is man and the other is this animal.",
          answer: "",
          choice1: "Jackal",
          choice2: "Mongoose",
          choice3: "Lynx",
          choice4: "Eagle",
        },
        {
          _id: "61a4d5bb409ee3a01f55ba97",
          title:
            "Cobras are venomous snakes of family Elapidae, that generally inhabit regions of these two continents.",
          answer: "",
          choice1: "South America and Asia",
          choice2: "Asia and Africa",
          choice3: "Asia and Australia",
          choice4: "South America and Australia",
        },
        {
          _id: "61a4d5bb67346e23746802cb",
          title: "These are typical Australian animals except one.",
          answer: "",
          choice1: "Platypus",
          choice2: "Dingo",
          choice3: "Echidna",
          choice4: "Sloth",
        },
        {
          _id: "61a4d5bb82d2dc3e853b7a5e",
          title:
            "All of these animals have large ears (relative to their size) except one.",
          answer: "",
          choice1: "Polar bears",
          choice2: "Foxes",
          choice3: "Bats",
          choice4: "Elephants",
        },
        {
          _id: "61a4d5bb91aa88ae4075b501",
          title: "This percentage of all snakes on Earth are lethal to humans.",
          answer: "",
          choice1: "10%",
          choice2: "20%",
          choice3: "15%",
          choice4: "25%",
        },
        {
          _id: "61a4d5bba2821658d33df15d",
          title: "All dogs, cats and birds are colorblind.",
          answer: "",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bba3bfc4aeda0b098f",
          title: "Snakes belong to the following category.",
          answer: "",
          choice1: "Invertebrates",
          choice2: "Lizards",
          choice3: "Reptiles",
          choice4: "Mammals",
        },
        {
          _id: "61a4d5bba4adee87ad3845a8",
          title: "A specialist in snakes is called one of these.",
          answer: "",
          choice1: "Pisciculturist",
          choice2: "Ornithologist",
          choice3: "Ophiologist",
          choice4: "Herpetologist",
        },
        {
          _id: "61a4d5bbb24bc7f72ddcf3a5",
          title:
            "Snakes are very likely to attack us, regardless of whether they feel threatened or not.",
          answer: "",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbb865ffafe4345311",
          title: "All of these animals are omnivorous except one.",
          answer: "",
          choice1: "Fox",
          choice2: "Mouse",
          choice3: "Opossum",
          choice4: "Snail",
        },
        {
          _id: "61a4d5bbbe4c733b72e222a9",
          title: "Snakes consume their food by means of this process.",
          answer: "",
          choice1: "Breathing",
          choice2: "Absorption",
          choice3: "Swallowing",
          choice4: "Chewing",
        },
        {
          _id: "61a4d5bbc782af8083f7b93f",
          title: "Three of these species shed their skin. Which one does not?",
          answer: "",
          choice1: "Penguins",
          choice2: "Snakes",
          choice3: "Insects",
          choice4: "Crustaceans",
        },
        {
          _id: "61a4d5bbd091c0b4fb9ab9a9",
          title: "Snakes reproduce only by laying eggs.",
          answer: "",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbd18d5df04e60d3e5",
          title:
            "Three of these Latin names are names of bears. Which is the odd one?",
          answer: "",
          choice1: "Melursus ursinus",
          choice2: "Helarctos malayanus",
          choice3: "Ursus minimus",
          choice4: "Felis silvestris catus",
        },
        {
          _id: "61a4d5bbd97fe96869454fed",
          title:
            "The cobras most recognizable feature is its hood, a flap of skin and muscle behind the head, believed to serve this purpose.",
          answer: "",
          choice1: "Balance control",
          choice2: "Heat collection from sun rays",
          choice3: "Camouflage",
          choice4: "More threatening appearance",
        },
        {
          _id: "61a4d5bbe23ef7a9f01b8143",
          title: "Snake skin is covered in scales.",
          answer: "",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbe513b25ff51e8fab",
          title: "Snakes are deaf.",
          answer: "",
          choice1: "True",
          choice2: "False",
        },
        {
          _id: "61a4d5bbe518709f73f959b1",
          title:
            "Representatives of three of these species produce venom of their own. Which is the odd species?",
          answer: "",
          choice1: "Lizards",
          choice2: "Scorpions",
          choice3: "Frogs",
          choice4: "Mosquitos",
        },
        {
          _id: "61a4d5bbf5b96c8a0d715205",
          title:
            "One of the following snakes does not belong to the Viperidae family.",
          answer: "",
          choice1: "Horned adder",
          choice2: "Grass snake",
          choice3: "Viper",
          choice4: "Asp",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.quizz-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  margin: 1rem 0;
  padding: 2rem;
}

.card-content {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.p-field-radiobutton,
.p-field-radiobutton > label {
  cursor: pointer;
}

.p-field-radiobutton > label {
  margin-left: 0.5rem;
}
</style>
