import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes
});
