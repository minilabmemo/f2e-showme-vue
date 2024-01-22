import { createApp } from "vue";
import App from "./App.vue";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import "./assets/styles/custom.css";
import "./assets/styles/animation.css";
import router from "./router";
createApp(App).use(router).mount("#app");
