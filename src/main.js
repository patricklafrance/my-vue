import App from "@/app.vue";
import Vue from "vue";
import { vueRouter } from "@/routing";

new Vue({
    el: "#app-container",
    router: vueRouter,
    render: h => h(App)
});
