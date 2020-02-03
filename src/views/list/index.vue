<template>
    <div class="p-list" v-loading="isLoading">
        <List class="p-list__list">
            <ListItem
                class="p-list__list-item"
                v-for="item in list"
                :key="item.id"
                :item="item"
            />
        </List>
    </div>
</template>

<script>
import { mixinLoading } from "../mixins/loading";
import { GetterNames, ActionNames } from "@/store/modules/films";
import List from "@/components/_list/list";
import ListItem from "@/components/_list/list-item";

export default {
    name: "PageList",
    mixins: [mixinLoading],
    components: {
        List,
        ListItem,
    },
    computed: {
        list() {
            return this.$store.getters[`films/${GetterNames.LIST}`];
        },
    },
    methods: {
        async fetchList() {
            this.errorStatus = null;
            this.isLoading = true;
            try {
                await this.$store.dispatch(`films/${ActionNames.FETCH_LIST}`);
            } catch (e) {
                this.errorStatus = e.status || 0;
                this.errorMessage = e.message || "Ошибка при отправке данных";
            } finally {
                this.isLoading = false;
            }
        },
        init() {
            this.fetchList();
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";
.p-list__list-item {
    margin-bottom: 2 * $base-grid-size;
}
</style>
