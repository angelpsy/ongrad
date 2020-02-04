<template>
    <div id="app" class="app" v-loading="isLoading">
        <Navigation
            class="app-nav"
            :items="navItems"
            :isAuth="isAuth"
        />
        <router-view />
    </div>
</template>

<script>
import Navigation from "@/components/navigation";
import { ActionNames as ANsAuth } from "@/store/modules/auth";
import { GetterNames as GNsAuth } from "@/store/modules/auth";
import { mixinLoading } from "@/views/mixins/loading";

export default {
    name: "App",
    mixins: [mixinLoading],
    components: {
        Navigation,
    },
    data() {
        return {
            navItems: [
                {
                    id: 1,
                    to: { name: "list" },
                    text: "Список фильмов",
                },
                {
                    id: 2,
                    to: { name: "add-item" },
                    text: "Добавить фильм",
                },
                {
                    id: 3,
                    to: { name: "login" },
                    text: "Войти",
                    meta: {
                        requiresGuest: true,
                    },
                },
                {
                    id: 4,
                    text: "Выйти",
                    meta: {
                        requiresAuth: true,
                    },
                    cb: this.logout.bind(this),
                },
            ],
        };
    },
    computed: {
        isAuth() {
            return this.$store.getters[`auth/${GNsAuth.IS_AUTH}`];
        },
    },
    methods: {
        async logout() {
            this.isLoading = true;
            this.errorStatus = null;
            try {
                await this.$store.dispatch(`auth/${ANsAuth.LOGOUT}`);
            } catch (e) {
                this.errorStatus = e.status | 0;
                this.errorMessage = e.message | "Некорректный выход";
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>

<style lang="scss">
@import "./assets/styles/vars";
.app-nav {
    margin-bottom: 2 * $base-grid-size;
}
</style>
