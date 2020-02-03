<template>
    <UIField class="ui-textarea__field" v-if="label" :label="label">
        <textarea
            class="ui-textarea"
            :class="{
                'ui-textarea--error': isError,
            }"
            :value="localValue"
            :id="id"
            :disabled="disabled"
            :required="required"
            :autofocus="autofocus"
            :placeholder="placeholder"
            ref="textarea"
            @change="onChange"
            @input="onInput"
        />
    </UIField>
    <textarea
        v-else
        class="ui-textarea"
        :class="{
            'ui-textarea--error': isError,
        }"
        :value="localValue"
        :id="id"
        :disabled="disabled"
        :required="required"
        :autofocus="autofocus"
        :placeholder="placeholder"
        ref="textarea"
        @change="onChange"
        @input="onInput"
    />
</template>

<script>
import UIField from "@/ui/field";
export default {
    name: "UITextarea",
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
        placeholder: {
            type: String,
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
            this.$emit("input", value);
        },
    },
};
</script>

<style lang="scss">
.ui-textarea {}
</style>
