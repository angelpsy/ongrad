<template>
    <div class="b-list" v-loading="isLoading">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss"></style>
