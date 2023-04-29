<template>
    <h5>Single New Sayfası</h5>
    <p>{{ singleNews.detail.news }}</p>
    <p>{{ singleNews.detail.comment }}</p>
</template>
<script setup>
import { singleNews, getSingleNews } from '@/store/content';
import { onMounted } from "vue";
// import { newId } from "@/store/content";
getSingleNews();
onMounted(() => {
    // // comments
    // singleNews();
    // getSingleNews(newId.value)
});

</script>