import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/index"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/login/index"),
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/list",
        name: "list",
        component: () =>
            import(/* webpackChunkName: "list" */ "../views/list/index"),
    },
    {
        path: "/add-item",
        name: "add-item",
        component: () =>
            import(/* webpackChunkName: "add-item" */ "../views/add-item/index"),
        meta: {
            requiresAuth: true,
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;
