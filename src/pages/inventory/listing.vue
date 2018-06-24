<template>
    <div class="listing">
        <h1>{{ title }}</h1>
    </div>
</template>

<style lang="scss" scoped>
.listing {
    background-color: red;
}
</style>

<script>
export default {
    data() {
        return {
            title: "This is the listing page"
        };
    }
};
</script>
