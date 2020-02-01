import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/home"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/login"),
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/list",
        name: "list",
        component: () =>
            import(/* webpackChunkName: "list" */ "../views/list"),
    },
    {
        path: "/add-item",
        name: "add-item",
        component: () =>
            import(/* webpackChunkName: "add-item" */ "../views/add-item"),
        meta: {
            requiresAuth: true,
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;
