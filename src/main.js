import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("lowerCase", function(value) {
    if (!value) return "";
    value = value.toString();
    return value.toLowerCase();
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
