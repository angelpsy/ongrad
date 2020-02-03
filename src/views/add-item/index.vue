<template>
    <div class="p-add-item">
        <AddItemForm
            :value="value"
            :fields="fields"
            :is-loading="isLoading"
            @fieldInput="fieldInput"
            @submit="onSubmitForm"
            @reset="reset"
        />
    </div>
</template>

<script>
import AddItemForm from "@/components/_add-item/form";
import { mixinLoading } from "@/views/mixins/loading";
import { FIELDS } from "@/views/add-item/fields";
import { ActionNames } from "@/store/modules/films";

export default {
    name: "PageAddItem",
    mixins: [mixinLoading],
    components: {
        AddItemForm,
    },
    data() {
        return {
            value: {},
            fields: FIELDS,
        };
    },
    methods: {
        async onSubmitForm(props) {
            this.isLoading = true;
            this.errorStatus = null;
            try {
                await this.$store.dispatch(
                    `films/${ActionNames.SEND_ITEM}`,
                    props
                );
                this.reset();
            } catch (e) {
                this.errorStatus = e.status || 0;
                this.errorMessage =
                    e.message ||
                    "Ошибка при отправке данных о фильме. Данные не отправились";
            } finally {
                this.isLoading = false;
            }
        },
        fieldInput({ fieldId, value }) {
            this.value[fieldId] = value;
        },
        reset() {
            FIELDS.forEach(field => {
                this.value[field.id] = null;
            });
        },
        init() {
            FIELDS.forEach(field => {
                this.$set(this.value, field.id, field.defaultValue);
            });
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style></style>
