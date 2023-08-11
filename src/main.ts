import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import {routerConvert} from "./route/routes";
const pinia = createPinia();
createApp(App).use(routerConvert).use(pinia).mount("#app");
