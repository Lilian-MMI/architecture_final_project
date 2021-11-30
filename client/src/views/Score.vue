<template>
  <div class="score">
    <div class="score-container">
      <Toolbar style="background: transparent">
        <template #start>
          <h1>Score numéro {{ $route.params.id }}</h1>
        </template>

        <template #end>
          <p>Votre score est : {{ score.grade }}</p>
        </template>
      </Toolbar>

      <div class="question-wrapper" v-if="!isLoadingData">
        <div
          class="card"
          v-for="question in questions"
          :key="question._id"
          :class="{
            correct: score.goodAnswers.find(
              (answer) => answer === question._id
            ),
          }"
        >
          <div class="card-header">
            <h3>{{ question.title }}</h3>
          </div>
          <div class="card-content">
            <div class="p-field-radiobutton" v-if="question.choice1">
              <RadioButton
                :id="question._id + 'choice1'"
                name="choice"
                :value="question.choice1"
                v-model="question.answer"
                :disabled="true"
              />
              <label :for="question._id + 'choice1'">{{
                question.choice1
              }}</label>
            </div>
            <div class="p-field-radiobutton" v-if="question.choice2">
              <RadioButton
                :id="question._id + 'choice2'"
                name="choice"
                :value="question.choice2"
                v-model="question.answer"
                :disabled="true"
              />
              <label :for="question._id + 'choice2'">{{
                question.choice2
              }}</label>
            </div>
            <div class="p-field-radiobutton" v-if="question.choice3">
              <RadioButton
                :id="question._id + 'choice3'"
                name="choice"
                :value="question.choice3"
                v-model="question.answer"
                :disabled="true"
              />
              <label :for="question._id + 'choice3'">{{
                question.choice3
              }}</label>
            </div>
            <div class="p-field-radiobutton" v-if="question.choice4">
              <RadioButton
                :id="question._id + 'choice4'"
                name="choice"
                :value="question.choice4"
                v-model="question.answer"
                :disabled="true"
              />
              <label :for="question._id + 'choice4'">{{
                question.choice4
              }}</label>
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
      score: {
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
        id: "b2f4f839-fa6e-4d1e-88a6-670ceafcdf45",
        grade: "6/20",
        userId: "61a0ad211fd0b119f5c3adad",
        quizzId: "61a4d5bbec72bc2b08430efb",
        createdAt: "2021-11-30T15:14:31.000Z",
        updatedAt: "2021-11-30T15:14:31.000Z",
      },

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
.score-container {
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
  justify-content: space-around;
  margin-top: 2rem;
}

.card:not(.correct) {
  border: 1px solid red;
  box-shadow: 0px 0px 12px rgba(238, 154, 154, 0.699);
}

.correct {
  border: 1px solid green;
  box-shadow: 0px 0px 12px rgba(154, 238, 172, 0.699);
}

.p-field-radiobutton > label {
  margin-left: 0.5rem;
}
</style>
