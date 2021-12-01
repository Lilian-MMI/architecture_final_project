import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import Dropdown from "primevue/dropdown";
import Skeleton from "primevue/skeleton";
import RadioButton from "primevue/radiobutton";
import Message from "primevue/message";
import Dialog from "primevue/dialog";

createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .use(ToastService)
  .component("InputText", InputText)
  .component("Button", Button)
  .component("Toast", Toast)
  .component("Toolbar", Toolbar)
  .component("Dropdown", Dropdown)
  .component("Skeleton", Skeleton)
  .component("RadioButton", RadioButton)
  .component("Message", Message)
  .component("Dialog", Dialog)
  .mount("#app");
