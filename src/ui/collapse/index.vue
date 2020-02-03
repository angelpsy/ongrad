<template>
    <div class="ui-collapse">
        <div
            class="ui-collapse__container"
            :class="{
                'ui-collapse__container--collapse':
                    isCollapsed && isShowCollapse,
            }"
            :style="styleContainer"
            ref="container"
        >
            <div class="ui-collapse__content" ref="content">
                <slot></slot>
            </div>
        </div>
        <div class="ui-collapse__actions" v-if="isShowCollapse">
            <UIButton type="button" @click="toggle">{{
                isCollapsed ? textExpand : textCollapse
            }}</UIButton>
        </div>
    </div>
</template>

<script>
import UIButton from "@/ui/button";

export default {
    name: "UICollapse",
    components: {
        UIButton,
    },
    props: {
        textExpand: {
            type: String,
            default: "Подробнее",
        },
        textCollapse: {
            type: String,
            default: "Свернуть",
        },
    },
    data() {
        return {
            isCollapsed: true,
            heightContent: 0,
            heightContainer: 0,
        };
    },
    computed: {
        styleContainer() {
            return {
                maxHeight:
                    !this.isCollapsed && this.heightContent
                        ? this.heightContent + "px"
                        : undefined,
            };
        },
        isShowCollapse() {
            return this.heightContent > this.heightContainer;
        },
    },
    methods: {
        toggle() {
            if (this.isCollapsed) {
                this.heightContent = this.$refs.content.clientHeight;
            }
            this.isCollapsed = !this.isCollapsed;
        },
        init() {
            this.heightContent = this.$refs.content.clientHeight;
            this.heightContainer = this.$refs.container.clientHeight;
        },
    },
    mounted() {
        this.init();
        window.addEventListener("resize", this.init);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.init);
    },
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";
.ui-collapse__container {
    position: relative;
    max-height: 50px;
    overflow: hidden;
    transition: max-height 0.3s;
    margin-bottom: $base-grid-size;

    &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        background-image: linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0.91), rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.73), rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.36), rgba(255, 255, 255, 0.27), rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0));
        transition: height 0.3s;
    }
}

.ui-collapse__container--collapse {
    &:after {
        height: 40px;
    }
}
</style>
