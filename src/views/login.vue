<template>
    <div class="p-login">
        <LoginForm
            class="p-login__form"
            @submit="onSubmitForm"
        />
    </div>
</template>

<script>
import LoginForm from "@/components/_login/form";
import { ActionNames as ANsAuth } from "@/store/modules/auth";

export default {
    name: "PageLogin",
    components: {
        LoginForm,
    },
    data() {
        return {
            isLoading: false,
            errorStatus: null,
            errorMessage: "",
        };
    },
    computed: {
        isError() {
            return this.errorStatus !== null;
        },
    },
    methods: {
        async onSubmitForm({ login, password }) {
            this.errorStatus = null;
            this.isLoading = true;
            try {
                await this.$store.dispatch(`auth/${ANsAuth.LOGIN_FETCH}`, {
                    login,
                    password,
                });
                alert("login success");
            } catch (e) {
                this.errorStatus = e.status || 0;
                this.errorMessage = e.message || "Ошибка при отправке данных";
                alert("login fail");
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>

<style></style>
