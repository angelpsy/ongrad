<template>
    <div class="p-login">
        <LoginForm
            class="p-login__form"
            :is-loading="isLoading"
            @submit="onSubmitForm"
        />
    </div>
</template>

<script>
import LoginForm from "@/components/_login/form";
import { ActionNames } from "@/store/modules/auth";
import { mixinLoading } from "../mixins/loading";

export default {
    name: "PageLogin",
    mixins: [mixinLoading],
    components: {
        LoginForm,
    },
    methods: {
        async onSubmitForm({ email, password }) {
            this.errorStatus = null;
            this.isLoading = true;
            try {
                await this.$store.dispatch(`auth/${ActionNames.LOGIN_FETCH}`, {
                    email,
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

<style lang="scss">
.p-login {
    display: flex;
    justify-content: center;
}
</style>
