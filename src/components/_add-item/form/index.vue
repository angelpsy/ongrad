<template>
    <form class="b-add-item-form" @submit.prevent="">
        <div
            v-for="field in fields"
            class="b-add-item-form__row"
            :key="field.id"
        >
            <UIInput
                v-if="field.typeField === 'input'"
                :type="field.typeInput"
                :placeholder="field.placeholder"
                :value="localValue[field.id]"
                :max="field.max"
                :min="field.min"
                :label="field.name + ':'"
                @input="onInputField({ value: $event, fieldId: field.id })"
            />
            <UITextarea
                v-if="field.typeField === 'textarea'"
                :placeholder="field.placeholder"
                :value="localValue[field.id]"
                :label="field.name + ':'"
                @input="onInputField({ value: $event, fieldId: field.id })"
            />
            <UISelect
                v-if="field.typeField === 'select'"
                :options="field.options"
                :value="localValue[field.id]"
                :label="field.name + ':'"
                @input="onInputField({ value: $event, fieldId: field.id })"
            />
        </div>
        <div class="b-add-item-form__actions">
            <UIButton @click="reset" class="b-add-item-form__action">Сбросить</UIButton>
            <UIButton
                @click="onSubmit"
                :disabled="!isChange"
                class="b-add-item-form__action"
                >Сохранить</UIButton
            >
        </div>
    </form>
</template>

<script>
import UIInput from "@/ui/input";
import UITextarea from "@/ui/textarea";
import UISelect from "@/ui/select";
import UIButton from "@/ui/button";

export default {
    name: "AddItemForm",
    components: {
        UIInput,
        UITextarea,
        UISelect,
        UIButton,
    },
    props: {
        value: {
            type: Object,
            require: true,
        },
        fields: {
            type: Array,
            require: true,
        },
    },
    data() {
        return {
            localValue: {},
            count: 1, // хак для корректной обработки глубоких изменений в объекте localValue для подсчета isChange
        };
    },
    computed: {
        isChange() {
            const keys = this.count && Object.keys(this.localValue);
            return keys.some(key => !!this.localValue[key]);
        },
    },
    watch: {
        value: {
            immediate: true,
            deep: true,
            handler(val) {
                this.localValue = { ...val };
            },
        },
    },
    methods: {
        onInputField({ fieldId, value }) {
            this.count++;
            this.$emit("fieldInput", { fieldId, value });
        },
        onSubmit() {
            this.$emit("submit", {
                ...this.localValue,
            });
        },
        reset() {
            this.$emit("reset");
        },
    },
};
</script>

<style lang="scss">
@import "../../../assets/styles/vars";
.b-add-item-form__row {
    margin-bottom: $base-grid-size;
}

.b-add-item-form__actions {
    display: flex;
}

.b-add-item-form__action {
    & + & {
        margin-left: $base-grid-size;
    }
}
</style>
