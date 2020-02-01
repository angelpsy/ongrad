<template>
    <select class="ui-select">
        <option
            class="ui-select__option"
            v-for="option in options"
            :value="option.value"
            :key="option.id"
        >
            {{option.name}}
        </option>
    </select>
</template>

<script>
export default {
    name: "UISelect",
    props: {
        options: {
            type: Array,
            require: true,
        },
    },
};
</script>

<style lang="scss">
.ui-select {}
</style>
