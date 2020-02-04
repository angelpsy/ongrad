<template>
    <nav class="b-navigation">
        <ul class="b-navigation__list">
            <template v-for="item in items">
                <li
                    class="b-navigation__item"
                    v-if="isShowItem(item, isAuth)"
                    :key="item.id"
                >
                    <router-link
                        v-if="item.to"
                        class="b-navigation__item-link"
                        :to="item.to"
                    >
                        {{ item.text }}
                    </router-link>
                    <a
                        :href="item.href || '#'"
                        v-else
                        class="b-navigation__item-link"
                        @click.prevent="item.cb ? item.cb() : () => {}"
                    >
                        {{ item.text }}
                    </a>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    props: {
        items: {
            type: Array,
            require: true,
        },
        isAuth: {
            type: Boolean,
            require: true,
        },
    },
    methods: {
        isShowItem(item, isAuth) {
            if (item.meta && item.meta.requiresGuest && isAuth) return false;
            if (item.meta && item.meta.requiresAuth && !isAuth) return false;
            return true;
        },
    },
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";
.b-navigation {}
.b-navigation__list {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
}
.b-navigation__item {
    margin-left: $base-grid-size;
}
</style>
