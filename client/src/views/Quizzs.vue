<template>
  <div class="quizzs">
    <div class="quizzs-container">
      <Toolbar style="background: transparent">
        <template #start>
          <h1>Liste des quizz</h1>
        </template>

        <template #end>
          <Dropdown
            v-model="selectedDifficulty"
            :options="difficulties"
            optionLabel="label"
            optionValue="value"
            placeholder="Choix de la difficulté"
            style="margin-right: 10px"
            showClear
            @change="getQuizzsWithSearch()"
          />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              type="text"
              v-model="searchFilter"
              placeholder="Catégorie..."
            />
          </span>
        </template>
      </Toolbar>

      <div class="quizzs-wrapper" v-if="!isLoadingData">
        <div v-for="quizz in quizzs" :key="quizz._id">
          <div class="card">
            <p
              class="difficulty-badge"
              :class="'difficulty-state-' + quizz.difficulty"
            >
              {{ difficulties[quizz.difficulty - 1].label }}
            </p>

            <div class="quizzs-item-label">
              <h2>{{ quizz.label }}</h2>
            </div>
            <p style="text-align: left">
              Total de <b>{{ quizz.questions.length }}</b> questions
            </p>
            <div class="quizzs-item-actions">
              <router-link :to="{ name: 'Quizz', params: { id: quizz._id } }">
                <Button
                  label="Jouer"
                  style="width: 100%; margin-top: 1rem"
                  :loading="isLoading"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="quizzs-wrapper" v-else>
        <div v-for="quizz in new Array(17)" :key="quizz">
          <div class="card">
            <p class="difficulty-badge">
              <Skeleton style="position: absolute; width: 50px; left: 0" />
            </p>

            <div class="quizzs-item-label">
              <h2><Skeleton style="width: 100px" /></h2>
            </div>
            <p style="text-align: left">
              <Skeleton />
            </p>
            <div class="quizzs-item-actions">
              <router-link to="/">
                <Skeleton height="45.556px"></Skeleton>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gameController from "@/controllers/game.controller";
import { debounce } from "debounce";

export default {
  data() {
    return {
      isLoadingData: false,
      searchFilter: "",
      difficulties: [
        { label: "Facile", value: "1" },
        { label: "Moyen", value: "2" },
        { label: "Difficile", value: "3" },
      ],
      selectedDifficulty: null,
      isLoading: false,
      isLoadingInput: false,
      quizzs: [
        {
          _id: "61a4d5bbec72bc2b08430efb",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bbb865ffafe4345311",
            "61a4d5bbd18d5df04e60d3e5",
            "61a4d5bb67346e23746802cb",
            "61a4d5bbe518709f73f959b1",
            "61a4d5bbc782af8083f7b93f",
            "61a4d5bba2821658d33df15d",
            "61a4d5bb82d2dc3e853b7a5e",
            "61a4d5bb91aa88ae4075b501",
            "61a4d5bb1c89291b665d3d04",
            "61a4d5bbbe4c733b72e222a9",
            "61a4d5bbd091c0b4fb9ab9a9",
            "61a4d5bbe513b25ff51e8fab",
            "61a4d5bbe23ef7a9f01b8143",
            "61a4d5bba3bfc4aeda0b098f",
            "61a4d5bba4adee87ad3845a8",
            "61a4d5bbf5b96c8a0d715205",
            "61a4d5bbb24bc7f72ddcf3a5",
            "61a4d5bb409ee3a01f55ba97",
            "61a4d5bbd97fe96869454fed",
            "61a4d5bb4084fa62402bc9b6",
          ],
        },
        {
          _id: "61a4d5bb5d6b6e6f6f890ba7",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bba9570a863dfa97bd",
            "61a4d5bb661a95fb8cb665ce",
            "61a4d5bb37d89adfea154c63",
            "61a4d5bb91412dd22047ca17",
            "61a4d5bb9a1b8131f421c289",
            "61a4d5bb83d944eff149754d",
            "61a4d5bb492e3c499585df4e",
            "61a4d5bbde33f1ff35c43f80",
            "61a4d5bb86786faff4de0a15",
            "61a4d5bb2b2239d6035ef532",
            "61a4d5bb2f0d52a63e0b8a9a",
            "61a4d5bb3e1108ffce7830df",
            "61a4d5bb3c491b17ac5e52a4",
            "61a4d5bbbb728e254baa5bc9",
            "61a4d5bbca6c3324da78d4dd",
            "61a4d5bb1d0e7552a32d6ced",
            "61a4d5bbc793059664ac1e4f",
            "61a4d5bb8ab2d5d049733558",
            "61a4d5bb68bff2621e0d2573",
            "61a4d5bb4aa0e2fecb2688dd",
          ],
        },
        {
          _id: "61a4d5bbdfb0b13bb238a79f",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bbff45d3eb1b4f2f1d",
            "61a4d5bb2928ffad6d605ded",
            "61a4d5bb660cba438cbc4114",
            "61a4d5bbb101f010c754f818",
            "61a4d5bb8fc8b8d31ddbf087",
            "61a4d5bbb6186688c966adef",
            "61a4d5bb068e9970342915e7",
            "61a4d5bb7ddf34b328b3f7cf",
            "61a4d5bb9b8dacb5733cdd80",
            "61a4d5bbd72dc37fd2a19409",
            "61a4d5bb1a47719b9bf478bf",
            "61a4d5bbd3deaaa7b958f146",
            "61a4d5bb1fe92cee82753679",
            "61a4d5bb3a3276d6d2c7667a",
            "61a4d5bbfa9e7ef07ddd7e43",
            "61a4d5bbae37dfaa1dd90c0a",
            "61a4d5bbca4029e8932b9b2b",
            "61a4d5bb61b1393d19356d4e",
            "61a4d5bbe2748399b8db1827",
            "61a4d5bb69ea53e64646375c",
          ],
        },
        {
          _id: "61a4d5bbf4f1318bc676986d",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bb45d172db7a2a0589",
            "61a4d5bb76366a40408af364",
            "61a4d5bbe493cd20709e0728",
            "61a4d5bb7f955d9b6ed64b19",
            "61a4d5bbd053dd94579bada1",
            "61a4d5bbf7cb11cdc0dbba64",
            "61a4d5bb5366f34472354d21",
            "61a4d5bbff7da3b7aeb9eb80",
            "61a4d5bb9ae2c6d4345aed01",
            "61a4d5bbeb252132214aba4f",
            "61a4d5bbe5c3b2d2e897d2c5",
            "61a4d5bb0fa8940865c8c517",
            "61a4d5bb7acca6700d89c045",
            "61a4d5bbc225820ac4ee13e2",
            "61a4d5bbddd97cec7e2aa5cd",
            "61a4d5bb29df45d80646f73f",
            "61a4d5bb4a11c44e1e87de2e",
            "61a4d5bb9b596ce125ffae1b",
            "61a4d5bb1115fea1d27b3e6b",
            "61a4d5bb2076fad2f3d2d35d",
          ],
        },
        {
          _id: "61a4d5bbdc8f9b162528da68",
          label: "animals",
          difficulty: 1,
          questions: [
            "61a4d5bbfd8c3ec029a09bd9",
            "61a4d5bbfc7441cfb240df3d",
            "61a4d5bb0ebd0041082dbb6c",
            "61a4d5bbe89e7bedc7af419f",
            "61a4d5bbb8082ca6b6e4867d",
            "61a4d5bbc6e08bdbd45d9c47",
            "61a4d5bb85d877b56e917938",
            "61a4d5bbaa3d456e0a5edce0",
            "61a4d5bb7dee8e183268433d",
            "61a4d5bbfcac97764d7e626c",
            "61a4d5bbd7bd26157aa71c5c",
            "61a4d5bb769640d63a0e7d90",
            "61a4d5bbf5eeb90238d7e4f9",
            "61a4d5bbf8d0a6c5729b0ca3",
            "61a4d5bba09ffe927df83e3d",
            "61a4d5bb2b3d642b27499660",
            "61a4d5bba0f904c487a2373a",
            "61a4d5bb30a3fa0c76e8c0c6",
            "61a4d5bb4564ccf8805d4868",
            "61a4d5bb75bb1ad50611eb00",
          ],
        },
        {
          _id: "61a4d5bbe2451bfe734b2ae2",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bbc3933124f6472593",
            "61a4d5bb0261d2a1d71ede88",
            "61a4d5bb90405ee61b6aa464",
            "61a4d5bb506e7ca6f22b760c",
            "61a4d5bbf2eb39ee7a64339f",
            "61a4d5bb5882bf46456e08e1",
            "61a4d5bb3889638bd25f55a5",
            "61a4d5bb78fd716eb2324678",
            "61a4d5bbbb159052c54a5a34",
            "61a4d5bbae6851cfcb5d3786",
            "61a4d5bbb3c85e35e0463391",
            "61a4d5bb7f8a262801620309",
            "61a4d5bba450a32e91431b4f",
            "61a4d5bb0d8b90685c5ac4a6",
            "61a4d5bbe264457efdb58d8c",
            "61a4d5bb892c57593d0269ad",
            "61a4d5bb4721037087263707",
            "61a4d5bb9b6629bc5351025a",
            "61a4d5bb320ed5b552aa0699",
            "61a4d5bbc853ef58848ca4dc",
          ],
        },
        {
          _id: "61a4d5bbc0050c0491b900ad",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bb0f69e885b93ec3e5",
            "61a4d5bb35413e915cd5e9ac",
            "61a4d5bb565b30acd6f0048c",
            "61a4d5bbbfa312065a78c819",
            "61a4d5bbba6fcccb4bd68e57",
            "61a4d5bbdc99f91fcfb7b91d",
            "61a4d5bb383dac04ed26bba4",
            "61a4d5bbb91c712c40fa8582",
            "61a4d5bbd7e9dbf27fdef735",
            "61a4d5bb31090a9e56360547",
            "61a4d5bb09ae0290746cc8cf",
            "61a4d5bb45803bfad6b8e079",
            "61a4d5bb55b30e8ab2c5315e",
            "61a4d5bb0f908f3c88a4186c",
            "61a4d5bb1d831a5d38ae0daa",
            "61a4d5bb696833012e2b2072",
            "61a4d5bb54ea1c43018035f9",
            "61a4d5bbd6888e59264a2900",
            "61a4d5bb05d897af028bdd86",
            "61a4d5bb30d0bbfcd95ae0ab",
          ],
        },
        {
          _id: "61a4d5bb108d86ec0f77e923",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bb9b92fc295912204a",
            "61a4d5bb0a4f857f0d63fd09",
            "61a4d5bb09dca979c19e5b28",
            "61a4d5bbdf80a912eeb83746",
            "61a4d5bb3ebba72e63424c4e",
            "61a4d5bb33badbc32a7cff59",
            "61a4d5bb32718ae20141b43e",
            "61a4d5bbb98aaf204011e7d0",
            "61a4d5bbf3a96396c38b3259",
            "61a4d5bb2d79d86cb8e58c75",
            "61a4d5bbdf91dd7e9126e136",
            "61a4d5bb08b4a8d43753c8a2",
            "61a4d5bbb258be46eb946031",
            "61a4d5bb5a9ad98e7d81e3af",
            "61a4d5bb83f2467382638177",
            "61a4d5bb9f14b9f74ec234ad",
            "61a4d5bb32a5ef5c68a1b1e8",
            "61a4d5bbc6001d874109bdd7",
            "61a4d5bbc054c7f4e6a48c92",
            "61a4d5bba28dc82ef8f8cf50",
          ],
        },
        {
          _id: "61a4d5bb491a12514f93ebe4",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bbd766688d969f07ca",
            "61a4d5bb49fe5b0f12197dc8",
            "61a4d5bb99c9dddd49eb26d5",
            "61a4d5bb906bee1723a5a78c",
            "61a4d5bbd0acd17adc2408b4",
            "61a4d5bb19c3b9fa15da5bf9",
            "61a4d5bbda42bd590683653f",
            "61a4d5bba2a44900acd0209c",
            "61a4d5bb649fed9787a7e2fe",
            "61a4d5bbd9ad003398643632",
            "61a4d5bbd4d273f94b240ffa",
            "61a4d5bb000641e50a2fe39e",
            "61a4d5bb7e53e5ff4f9960ce",
            "61a4d5bb7365d740cfbed5df",
            "61a4d5bb0befa2e9ed866848",
            "61a4d5bb45f0d6b97c398183",
            "61a4d5bb834ec763ed84283d",
            "61a4d5bbe32bc4d629205188",
            "61a4d5bbb5e6c3883c90272b",
            "61a4d5bb87c451094237bb9f",
          ],
        },
        {
          _id: "61a4d5bbc3db05bd373caba9",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bbb900452c5f143894",
            "61a4d5bb4d8df16371b0cbab",
            "61a4d5bb8847a4c514a45e4f",
            "61a4d5bb951ac3eda6464345",
            "61a4d5bb2b887db6151999aa",
            "61a4d5bbb3adc94720363180",
            "61a4d5bb38b4aa8d9dbce58d",
            "61a4d5bbca4b7a39ebab75ae",
            "61a4d5bb26c2d216f6a277d5",
            "61a4d5bb2036ba1442e5cf07",
            "61a4d5bb27ce856162517e7f",
            "61a4d5bb0e36387352aa720e",
            "61a4d5bb69880cde30193a06",
            "61a4d5bb1ce48fc5bb1f0755",
            "61a4d5bb996fd22c715fc1b7",
            "61a4d5bb51891fae6a7ed3e1",
            "61a4d5bbb3672ad1284cf733",
            "61a4d5bb414a035df455e85d",
            "61a4d5bbf834eab01e5329e1",
            "61a4d5bbdc115aef7069dbdb",
          ],
        },
        {
          _id: "61a4d5bb2f52d8af21ca6b58",
          label: "animals",
          difficulty: 1,
          questions: [
            "61a4d5bb042ee878dce4234f",
            "61a4d5bbecd8a51af7d22231",
            "61a4d5bb7a66877ac0dbfb11",
            "61a4d5bb6e1a607c1775a8c6",
            "61a4d5bbd9c1e7a53d8a7724",
            "61a4d5bb1ace37473b8a4502",
            "61a4d5bb5d6aa399cb5f1d9f",
            "61a4d5bb50fa8c798a705dd4",
            "61a4d5bb6b7ce799940c5793",
            "61a4d5bb7b478e7ea5be99b2",
            "61a4d5bb9e7be5117c9fcc56",
            "61a4d5bb97576db68a07d708",
            "61a4d5bb33f9b6cf89c289dc",
            "61a4d5bbf0c9ada2e9c95033",
            "61a4d5bb38c262f01b316cfd",
            "61a4d5bbc1504d388a07c561",
            "61a4d5bbb23576b33431520c",
            "61a4d5bbbbebde3eadd7d93c",
            "61a4d5bb8d4768b037da9c66",
            "61a4d5bbe3a470ba0174f923",
          ],
        },
        {
          _id: "61a4d5bb33fda19d97b6824d",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bbde10022c26880ae9",
            "61a4d5bb54d4b8fcc85bf168",
            "61a4d5bbd6ba4b646f6c1af2",
            "61a4d5bb7c50d6c67f7bcc6f",
            "61a4d5bb8ec5e2a72b50cebe",
            "61a4d5bb3c1a3bf3e32142d8",
            "61a4d5bb2e2ab2175bf752de",
            "61a4d5bbb7d5fc0c0df20c2e",
            "61a4d5bb31afa876bf7d16a2",
            "61a4d5bbc91bd2f32b4f64c0",
            "61a4d5bb773e8339c990d580",
            "61a4d5bb158e78c3ae23e2b7",
            "61a4d5bbddf4ba7dab560dd6",
            "61a4d5bbde23d992bbdfe7af",
            "61a4d5bb685a3618343a7618",
            "61a4d5bbf4f1157e640415d0",
            "61a4d5bbcfa782426ab87f16",
            "61a4d5bb922a9c184eca6fd3",
            "61a4d5bbf5b4bc8664fc7d5e",
            "61a4d5bb0f6c8c077ba15cd1",
          ],
        },
        {
          _id: "61a4d5bb70d8ca0414cf1cf5",
          label: "animals",
          difficulty: 1,
          questions: [
            "61a4d5bbd3ee79e1f20ec3d6",
            "61a4d5bbd5fbdbf954215476",
            "61a4d5bb38cabf49dbb627c1",
            "61a4d5bb1263d49812784363",
            "61a4d5bbf0b1c4536791616c",
            "61a4d5bbe508eb6e4c0b3831",
            "61a4d5bb6d0ec2d4e087766b",
            "61a4d5bb651f9652837edb74",
            "61a4d5bb7575e98f5550a067",
            "61a4d5bbcd8d727f25d722ef",
            "61a4d5bbee0e0c52a8f51191",
            "61a4d5bb9d11dc763c2ada37",
            "61a4d5bbb3f3eedd8b330b70",
            "61a4d5bb10600107cf6fb669",
            "61a4d5bbe05b576a31dd19b8",
            "61a4d5bb80d60b5341ead093",
            "61a4d5bb0b486793b962ea97",
            "61a4d5bb76353936a2610270",
            "61a4d5bb73db80d729543b73",
            "61a4d5bb51fcd1772e50ea9f",
          ],
        },
        {
          _id: "61a4d5bb0a5b20b22e434050",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bb2b44823fa4c8e73e",
            "61a4d5bb3f4e03641002f067",
            "61a4d5bb83a9e67944c597c6",
            "61a4d5bb41da72c15cc0c2b4",
            "61a4d5bb5488e26905ed6238",
            "61a4d5bbd594c74addc978f8",
            "61a4d5bb37ae5fbb5ee00dc7",
            "61a4d5bbd5577652c0d139a2",
            "61a4d5bb81833edb3f9adb0c",
            "61a4d5bb1e0810826b6032b4",
            "61a4d5bb080265b238a1ed5c",
            "61a4d5bbedbd029190579dc3",
            "61a4d5bb99285c5df0d37b67",
            "61a4d5bbadae3116329083de",
            "61a4d5bb1b9907368b375870",
            "61a4d5bbb52d24dd81f8ccb6",
            "61a4d5bb3a946cf1fdf7ff1b",
            "61a4d5bb30b286ed623733c9",
            "61a4d5bb4472ec3f44f3f342",
            "61a4d5bb7e4fb8e6e6f82132",
          ],
        },
        {
          _id: "61a4d5bbbe2c3b49f42bf666",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bb990175862f7933a3",
            "61a4d5bb4541c0035d9b7579",
            "61a4d5bb12774f302fff0da6",
            "61a4d5bb4e2589f8fbda9337",
            "61a4d5bb571b68ee1a320546",
            "61a4d5bb769cb1356340b01a",
            "61a4d5bb30ba9064fd04ac22",
            "61a4d5bbf1017a662c70278f",
            "61a4d5bb2a0c9315b16be500",
            "61a4d5bb2ffed0f6c4efd7ed",
            "61a4d5bb6fcc2b1fb2e3f0aa",
            "61a4d5bba163a57a7ce91a46",
            "61a4d5bba3a0c3398ceded97",
            "61a4d5bb05e51a7206d896f0",
            "61a4d5bbd4e78359a0099a0d",
            "61a4d5bb4c5f24d8d1396ca6",
            "61a4d5bbc255308e084f5f25",
            "61a4d5bb492f5ca9dca82430",
            "61a4d5bbc0ed136e1b862691",
            "61a4d5bb9b4ceed29df3c707",
          ],
        },
        {
          _id: "61a4d5bb6ce70a03454e31f9",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bb34d7db5de81a4458",
            "61a4d5bb9f44bed2c03aee4c",
            "61a4d5bb74356b333959381b",
            "61a4d5bb3c04cc0919edc1fd",
            "61a4d5bbf28e90af31ff98a6",
            "61a4d5bb765b40b18ec18f7d",
            "61a4d5bb15cee2e25595620a",
            "61a4d5bb4a689599ebfbf4a3",
            "61a4d5bb29c2be56588bab3e",
            "61a4d5bb256634cc8cc79924",
            "61a4d5bbe4e6ed817119376c",
            "61a4d5bb158fce161a5f949c",
            "61a4d5bbabdb32ad12e81d6c",
            "61a4d5bb6131fe9c7c2c0600",
            "61a4d5bb1fba03048762a1c1",
            "61a4d5bbfd43a6c13f1da3ea",
            "61a4d5bba59d7cd16929c83c",
            "61a4d5bbba02b8467c91075a",
            "61a4d5bb39e99ead6f97f9d8",
            "61a4d5bb3f7044d4a4979214",
          ],
        },
        {
          _id: "61a4d5bb3752f50a76b47330",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bb83e82dc5e5813355",
            "61a4d5bb6798d0537f2857ae",
            "61a4d5bb7efcd46e23efb151",
            "61a4d5bbaf7b794db2ae472c",
            "61a4d5bbe31bfb8bea9ad0c1",
            "61a4d5bb5f7c6902179fc0d9",
            "61a4d5bb48626e717449c7fe",
            "61a4d5bbc6c64b6c6d243212",
            "61a4d5bbbcd9f665ad630baf",
            "61a4d5bbd5dc8d54b6f5d0cb",
            "61a4d5bb960b6db71f6709ef",
            "61a4d5bb5b8b194f5280f8ba",
            "61a4d5bbe6c7d530e6f89f55",
            "61a4d5bb163225d8ca582190",
            "61a4d5bbe0e6a37c3a084636",
            "61a4d5bb4084c0e0bac3c790",
            "61a4d5bb25d0b6584f78fcb5",
            "61a4d5bbaddde64b53e27cea",
            "61a4d5bb97734c464f2fe6fe",
            "61a4d5bb4218edd62bf24b82",
          ],
        },
        {
          _id: "61a4d5bbfc26d778e7c90383",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bbabc58426726c839e",
            "61a4d5bb8c9ea82f638f3e77",
            "61a4d5bb215a62be3488f545",
            "61a4d5bbfd0079f9a8aae55e",
            "61a4d5bbc7eac5f786f10b04",
            "61a4d5bb703211bb37bccaf7",
            "61a4d5bb71e31945f6cfb9f0",
            "61a4d5bb3805c95e54100820",
            "61a4d5bb614a1da94a0db9a1",
            "61a4d5bb115c69bd96d883df",
            "61a4d5bb47a80c65f1f38609",
            "61a4d5bb58573ee298be5cc3",
            "61a4d5bb867fd1112ff86212",
            "61a4d5bbea6bb4613d7c4851",
            "61a4d5bba802f81ce8289c02",
            "61a4d5bbc2b577fcf3b8c82c",
            "61a4d5bb5bb9a6a3995e4f43",
            "61a4d5bb4e766dac9b079163",
            "61a4d5bbe9658269e7f8aa3f",
            "61a4d5bb03ebf73b34f311e5",
          ],
        },
        {
          _id: "61a4d5bb506ed530e4819ac5",
          label: "animals",
          difficulty: 1,
          questions: [
            "61a4d5bb41eb28e6fc84a931",
            "61a4d5bb2f5ec83fffe7527a",
            "61a4d5bb653c3fae5b558c53",
            "61a4d5bb3a05dea731d83847",
            "61a4d5bb05f96765020791fc",
            "61a4d5bb47a1557f29b4ab03",
            "61a4d5bbd1b3b9a36e04dd21",
            "61a4d5bb1c0b1d6d55fe1e04",
            "61a4d5bba133dbdf20390a06",
            "61a4d5bb7bf73bafeec9cca3",
            "61a4d5bbf8bf223df4d3568f",
            "61a4d5bbd0d29d5e5e1218a1",
            "61a4d5bbef24cc1f661a3d31",
            "61a4d5bb6771b1af6c9e571a",
            "61a4d5bb06dddcfb81f60268",
            "61a4d5bb086ee158462b248d",
            "61a4d5bb4e8044e46e8f2d5d",
            "61a4d5bbb072387c95df62c0",
            "61a4d5bbaebfbac6ef7e00a3",
            "61a4d5bb8ee6c3822e61e569",
          ],
        },
        {
          _id: "61a4d5bb906f0ec536df5ff8",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bb9f7f8f0f1d783fbf",
            "61a4d5bbf9e89cc26acb3e9a",
            "61a4d5bbde433ebfc0363c39",
            "61a4d5bb447ac18d7a0a06a0",
            "61a4d5bb3a36fe2e872fa1a7",
            "61a4d5bb2081053d034fa3ff",
            "61a4d5bb09550b5cd8d94c3a",
            "61a4d5bb27f4615aaafe8662",
            "61a4d5bb54d87f938582780c",
            "61a4d5bb420fdd057d971c6b",
            "61a4d5bbacd105102da59b70",
            "61a4d5bbae5c25b33dc68b60",
            "61a4d5bb014e9e56d0d25c2d",
            "61a4d5bbb46b6680a098832f",
            "61a4d5bb0c2c1f3d16385233",
            "61a4d5bb652acd17fda424b8",
            "61a4d5bb77b48e1493f39509",
            "61a4d5bb4064089c03543c99",
            "61a4d5bbadf969173fc24dfb",
            "61a4d5bb77698488d0a6f360",
          ],
        },
        {
          _id: "61a4d5bb50f864ebbe96fbf8",
          label: "animals",
          difficulty: 1,
          questions: [
            "61a4d5bb9a60818115ee3f6d",
            "61a4d5bbab017ad375550244",
            "61a4d5bb5e1f282e05a211a1",
            "61a4d5bbd6194a614f509c39",
            "61a4d5bbfd5c5a6ffcbeb315",
            "61a4d5bb278e7a37d13131f7",
            "61a4d5bbd8b1f8e84706b9b0",
            "61a4d5bbf05566279b84bd35",
            "61a4d5bbceb7a6626e8b5e06",
            "61a4d5bb931639e2054bcee7",
            "61a4d5bbcc4f1f242d20bbda",
            "61a4d5bb3868fcba110cb6d1",
            "61a4d5bb31ad74a86e10f206",
            "61a4d5bb66b5228c546aa39b",
            "61a4d5bb733a204bf8dcfde0",
            "61a4d5bb5e270dfa3ca4a7b0",
            "61a4d5bb5bc88075cd24c1f6",
            "61a4d5bb7542b1d2204ada76",
            "61a4d5bb217de114994eca7c",
            "61a4d5bb144795d34467fd61",
          ],
        },
        {
          _id: "61a4d5bb0352114f2ea02148",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bb56c4f8d9337c656a",
            "61a4d5bbbfb1f23a69c75076",
            "61a4d5bb6ce31ca2caee7e67",
            "61a4d5bb2d148c4134d4bcce",
            "61a4d5bbefab210cf2f52781",
            "61a4d5bb438099b8c2146e82",
            "61a4d5bb533207e3f6faf96a",
            "61a4d5bbc75faa551f2c7a1a",
            "61a4d5bbb90739508e462c52",
            "61a4d5bbfe81105f26a0de14",
            "61a4d5bb88418f0ba774ad5c",
            "61a4d5bb4d9426269a84c665",
            "61a4d5bbd0e1064e1f4162f0",
            "61a4d5bbcab3067757d97ec3",
            "61a4d5bb866e642c28e609e1",
            "61a4d5bb750321d496191f65",
            "61a4d5bbd961b6ebc4c73f22",
            "61a4d5bb618a4b696de675aa",
            "61a4d5bb563081ea0101aeb2",
            "61a4d5bbd9fe6ab9478dd9db",
          ],
        },
        {
          _id: "61a4d5bb4d30b54d0cb7a194",
          label: "animals",
          difficulty: 2,
          questions: [
            "61a4d5bba8248f789d59e7f0",
            "61a4d5bb5b9d3386436e154c",
            "61a4d5bb17c98fa626db6ea3",
            "61a4d5bb10dd1abe059892b2",
            "61a4d5bb69cbb88f49a8a2b5",
            "61a4d5bbeac4378b89a29669",
            "61a4d5bbca5461b0dedfa04d",
            "61a4d5bba373bc0bce1057a9",
            "61a4d5bb4646285eb9e0c74e",
            "61a4d5bbd8a2f3d1f7180937",
            "61a4d5bb14d5f4f2494c1101",
            "61a4d5bbc5e0df26e2bbc655",
            "61a4d5bb4bb156ded67024f7",
            "61a4d5bb04439e7bf50f7f16",
            "61a4d5bb9745ac33a0cfa513",
            "61a4d5bbbd75fecf30073de0",
            "61a4d5bbbe7b663b5b28d5ee",
            "61a4d5bbdd39b71f00af77d9",
            "61a4d5bb62fefdd9fbecd0e4",
            "61a4d5bbed5ef35489bd5362",
          ],
        },
        {
          _id: "61a4d5bb0bdc8cbe56c5f358",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bb431b38e8bca9c9a5",
            "61a4d5bbbb98a551d73ef102",
            "61a4d5bb41210f07eac8d0a6",
            "61a4d5bb4338f5a9c386d499",
            "61a4d5bb700be5b6d4284e70",
            "61a4d5bb1cd170d8ab6ba8a3",
            "61a4d5bba0dd75ab40d534a6",
            "61a4d5bbfca300ddfe039f48",
            "61a4d5bb71a94078e280e505",
            "61a4d5bbf93cbb7b9d06e679",
            "61a4d5bba3f4c658a7a09abd",
            "61a4d5bbc79f5e0a6bc5a3d0",
            "61a4d5bbc004ba59303bd22f",
            "61a4d5bba6de52cdc4c1769f",
            "61a4d5bbaf5c541bb03212f6",
            "61a4d5bb6dc58da200cbb999",
            "61a4d5bba887828e30583c26",
            "61a4d5bb12d11c3472e0f6a7",
            "61a4d5bb104abbe32404440d",
            "61a4d5bb62fbe568c1cd7373",
          ],
        },
        {
          _id: "61a4d5bbad8ba345062994a2",
          label: "animals",
          difficulty: 3,
          questions: [
            "61a4d5bb848649ae73517e0a",
            "61a4d5bb946feaf83631540e",
            "61a4d5bbffcd72058472ae57",
            "61a4d5bbd358c26cc94e685f",
            "61a4d5bbdabe372c5c713e97",
            "61a4d5bbc27687cfd7fdd935",
            "61a4d5bb336bd1e521f485bb",
            "61a4d5bbba66d768e93f4879",
            "61a4d5bb720167eb186bf5b7",
            "61a4d5bbc882f317e15894f2",
            "61a4d5bb3f2468e510f41861",
            "61a4d5bb6f2701ac7a946345",
            "61a4d5bb48efa27f8990aecf",
            "61a4d5bbc048638059a6ec80",
            "61a4d5bb1e3ad68189802b20",
            "61a4d5bbd873d52cadf2314b",
            "61a4d5bbf47d84593de9d5f5",
            "61a4d5bba408aff535f94b27",
            "61a4d5bbd2a57a0d157c2dec",
            "61a4d5bb6caaafc8b858cca8",
          ],
        },
      ],
    };
  },

  created() {
    /* DEBOUNCE INPUT FILTER */
    this.getQuizzsWithSearch = debounce(this.getQuizzsWithSearch, 1000);
  },

  methods: {
    async getQuizzsWithSearch(search = this.searchFilter) {
      this.isLoadingInput = true;

      let params = {
        difficulty: this.selectedDifficulty,
      };

      if (search) {
        params["label"] = search;
      }

      await gameController.getQuizzs(params).then((response) => {
        this.quizzs = response.data;
      });

      this.isLoadingInput = false;
    },
  },

  watch: {
    searchFilter: function (search) {
      this.getQuizzsWithSearch(search);
    },
  },
};
</script>

<style scoped>
.quizzs-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin: 0;
  text-align: left;
}

.quizzs-wrapper {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.card {
  padding: 1rem;
  position: relative;
}

a {
  text-decoration: none;
}

.difficulty-state-1 {
  background-color: #c8e6c9;
  color: #256029;
}

.difficulty-state-2 {
  background-color: #ffd8b2;
  color: #805b36;
}

.difficulty-state-3 {
  background-color: #ffcdd2;
  color: #c63737;
}

.difficulty-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
  width: fit-content;
  position: absolute;
  top: 0;
}

.quizzs-item-label {
  margin-top: 2rem;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: left;
}

@media screen and (max-width: 1200px) {
  .quizzs-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .quizzs-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 550px) {
  .quizzs-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
