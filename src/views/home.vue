<template>
    <div class="p-home">
        <nav class="p-home__nav">
            <ul class="p-home__nav-list">
                <li class="p-home__nav-item">
                    <router-link :to="{ name: 'login' }">login</router-link>
                </li>
                <li class="p-home__nav-item">
                    <router-link :to="{ name: 'list' }">list</router-link>
                </li>
                <li class="p-home__nav-item">
                    <router-link :to="{ name: 'add-item' }">add item</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "PageHome",
};
</script>
