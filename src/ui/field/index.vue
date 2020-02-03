<template functional>
    <label class="ui-field">
        <span class="ui-field__label">{{ props.label }}</span>
        <span class="ui-field__input">
            <slot />
        </span>
    </label>
</template>

<style lang="scss">
@import "../../assets/styles/vars";
.ui-field {
    display: flex;
}
.ui-field__label {
    margin-right: $base-grid-size;
}
</style>
