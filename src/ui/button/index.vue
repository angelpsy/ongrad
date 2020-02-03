<template>
    <button class="ui-button" :disabled="disabled" @click="$emit('click', $event)">
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
