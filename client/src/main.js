import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";

createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .component("InputText", InputText)
  .component("Button", Button)
  .component("Card", Card)
  .mount("#app");
