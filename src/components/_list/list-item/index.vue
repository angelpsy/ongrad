<template>
    <div class="b-list-item">
        <div class="b-list-item__row b-list-item__row--baseline">
            <div class="b-list-item__title">{{ item.title }}:</div>
            <div class="b-list-item__year">{{ item.year }} г.</div>
        </div>

        <div class="b-list-item__row">
            <div class="b-list-item__col-left">
                <div class="b-list-item__preview">
                    <img
                        :src="item.imgUrl"
                        :alt="item.title"
                        class="b-list-item__preview-img"
                    />
                </div>
            </div>
            <div class="b-list-item__col-right">
                <div class="b-list-item__genre">
                    Жанры: {{ item.genre | lowerCase }}
                </div>
                <div class="b-list-item__rating">
                    Рейтинг: {{ item.rating }}
                </div>
                <div class="b-list-item__desc">
                    <UICollapse :text-expand="item.textActionMore">
                        Описание: {{ item.description }}
                    </UICollapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UICollapse from "@/ui/collapse";
export default {
    name: "ListItem",
    components: {
        UICollapse,
    },
    props: {
        item: {
            type: Object,
            require: true,
        },
    },
};
</script>

<style lang="scss">
@import "../../../assets/styles/vars";
.b-list-item__title {
    font-weight: bold;
    font-size: 20px;
}
.b-list-item__row {
    display: flex;
    margin-bottom: $base-grid-size;
}
.b-list-item__row--baseline {
    align-items: baseline;
}
.b-list-item__col-left {
    max-width: 100px;
    flex-shrink: 0;
    margin-right: $base-grid-size;
}
.b-list-item__preview-img {
    max-width: 100%;
}
.b-list-item__rating {
    opacity: 0.5;
}
</style>
