<template>
    <UIField class="ui-select__field" v-if="label" :label="label">
        <select
            class="ui-select"
            :value="localValue"
            :id="id"
            :disabled="disabled"
            :required="required"
            :autofocus="autofocus"
            @input="onInput"
            @change="onChange"
            ref="select"
        >
            <option
                class="ui-select__option"
                v-for="option in options"
                :value="option.value"
                :key="option.id"
            >
                {{ option.name }}
            </option>
        </select>
    </UIField>
    <select
        v-else
        class="ui-select"
        :value="localValue"
        :id="id"
        :disabled="disabled"
        :required="required"
        :autofocus="autofocus"
        @input="onInput"
        @change="onChange"
        ref="select"
    >
        <option
            class="ui-select__option"
            v-for="option in options"
            :value="option.value"
            :key="option.id"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
import UIField from "@/ui/field";

export default {
    name: "UISelect",
    components: {
        UIField,
    },
    props: {
        value: {
            type: [String, null],
            require: true,
        },
        name: {
            type: String,
            require: false,
        },
        id: {
            type: String,
            require: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            require: false,
        },
        options: {
            type: Array,
            require: true,
        },
        multiSelect: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            localValue: "",
            isError: false,
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.localValue = val;
            },
        },
    },
    methods: {
        onChange(event) {
            const value = event.target.value;
            this.$emit("change", value);
        },
        onInput(event) {
            const value = event.target.value;
            this.$emit("input", value);
        },
    },
};
</script>

<style lang="scss">
.ui-select {}
</style>
