<template>
    <UIField class="ui-input__field" v-if="label" :label="label">
        <input
            class="ui-input"
            :class="{
                'ui-input--error': isError,
            }"
            :value="localValue"
            :id="id"
            :disabled="disabled"
            :required="required"
            :autofocus="autofocus"
            :type="type"
            :placeholder="placeholder"
            :min="min"
            :max="max"
            ref="input"
            @change="onChange"
            @input="onInput"
        />
    </UIField>
    <input
        v-else
        class="ui-input"
        :class="{
            'ui-input--error': isError,
        }"
        :value="localValue"
        :id="id"
        :disabled="disabled"
        :required="required"
        :autofocus="autofocus"
        :type="type"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        ref="input"
        @change="onChange"
        @input="onInput"
    />
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
        value: {
            type: [String, Number, null],
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
        min: {
            type: Number,
            require: false,
        },
        max: {
            type: Number,
            require: false,
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
            this.isError = false;
            if (this.type === "number") {
                if (
                    (this.min !== undefined && value < this.min) ||
                    (this.max !== undefined && value > this.max)
                ) {
                    this.isError = true;
                }
            }
            this.$emit("input", value);
        },
    },
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";
.ui-input {}

.ui-input--error {
    border-color: $color-error;
}
</style>
