<template>
    <button class="ui-button" :disabled="disabled">
        <slot />
    </button>
</template>

<script>
export default {
    name: "UIButton",
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
.ui-button {}
</style>
