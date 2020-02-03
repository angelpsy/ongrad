<template functional>
    <label class="ui-field">
        <span class="ui-field__label">{{ props.label }}</span>
        <span class="ui-field__input">
            <slot />
        </span>
    </label>
</template>

<style lang="scss">
.ui-field {
    display: flex;
}

.ui-field__label {
    margin-right: 10px;
}
</style>
