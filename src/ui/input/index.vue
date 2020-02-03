<template>
    <div class="ui-input__wrapper">
        <UIField class="ui-input__field" v-if="label" :label="label">
            <input
                class="ui-input"
                :value="localValue"
                :id="id"
                :disabled="disabled"
                :required="required"
                :autofocus="autofocus"
                :type="type"
                :placeholder="placeholder"
                @change="onChange"
                @input="onInput"
            />
        </UIField>
        <input
            v-else
            class="ui-input"
            :value="localValue"
            :id="id"
            :disabled="disabled"
            :required="required"
            :autofocus="autofocus"
            :type="type"
            :placeholder="placeholder"
            @change="onChange"
            @input="onInput"
        />
    </div>
</template>

<script>
import { TYPES } from "./utils";
import UIField from "@/ui/field";

export default {
    name: "UIInput",
    components: {
        UIField,
    },
    props: {
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
        type: {
            type: String,
            default: "text",
            validator: type => TYPES.includes(type),
        },
        label: {
            type: String,
            require: false,
        },
        placeholder: {
            type: String,
            require: false,
        },
    },
    data() {
        return {
            localValue: "",
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.localValue = val;
            },
        },
        localValue: {
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
.ui-input {}
</style>
