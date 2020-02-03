<template>
    <form class="b-login-form" @submit.prevent="onSubmit">
        <UIInput
            class="b-login-form__field"
            v-model="login"
            label="Логин"
            placeholder="Логин"
            type="text"
        />
        <UIInput
            class="b-login-form__field"
            v-model="password"
            label="Пароль"
            placeholder="Пароль"
            type="password"
        />
        <div class="b-login-form__actions">
            <UIButton @click="onClear" type="reset">Сбросить</UIButton>
            <UIButton @click="onSubmit" type="submit" :disabled="!isFormValid">Отправить</UIButton>
        </div>
    </form>
</template>

<script>
import UIInput from "@/ui/input";
import UIButton from "@/ui/button";

export default {
    name: "LoginForm",
    components: {
        UIInput,
        UIButton,
    },
    data() {
        return {
            login: "",
            password: "",
        };
    },
    computed: {
        isFormValid() {
            return this.login && this.password;
        },
    },
    methods: {
        onClear() {
            this.login = "";
            this.password = "";
        },
        onSubmit() {
            if (!this.isFormValid) return;
            this.$emit("submit", {
                login: this.login,
                password: this.password,
            });
        },
    },
};
</script>

<style lang="scss">

</style>
