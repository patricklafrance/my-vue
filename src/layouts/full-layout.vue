<template>
    <div class="layout">
        <page-header />
        <div class="content">
            <router-view />
        </div>
        <page-footer />
    </div>
</template>

<script>
import PageHeader from "./page-header.vue";
import PageFooter from "./page-footer.vue";

export default {
    components: {
        PageHeader,
        PageFooter
    }
};
</script>
