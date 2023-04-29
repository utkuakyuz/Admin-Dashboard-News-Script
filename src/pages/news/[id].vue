<template>
  <div class="wrapper px-4 mt-n10">
    <h3 class="mt-3 mb-3 page-title">Haber Detay</h3>
    <div class="card mb-4">
      <div class="card-header"> ID'li Haber Gösterildi <router-link class="nav-link text-black" :to="'/news/newsTable'"
          aria-expanded="false" style="float: right;color: black !important;margin-top: 0em;padding: 0rem 0.5rem;">
          <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
        </router-link>
        <router-link class="nav-link text-black" :to="`/news/edit/${singleNews.detail.ID}`"
          aria-expanded="false" style="float: right;color: black !important;margin-top: 0em;padding: 0rem 0.5rem;">
          <fai icon="edit" aria-hidden="true"></fai><span class="d-none d-sm-inline">Düzenle</span>
        </router-link>
      </div>
      <div class="card-body">
        <p>ID: {{ singleNews.detail.ID }}</p>
        <p>Başlık: {{ singleNews.detail.title }}</p>
        <p>Özet:{{ singleNews.detail.summary }}</p>
        <p>Kategori: {{ singleNews.detail.category }}</p>
        <p>Tip: {{ singleNews.detail.newstype }}</p>
        <p>Tarih: {{ singleNews.detail.createdAt }}</p>
        <p>Detay: {{ singleNews.detail.newsDetail }}</p>
      </div>
      <div class="card-footer">Yorumlar</div>
      <div class="card-body">
        <div v-for="comment in singleNews.comment" :key="comment.ID">
          <p>{{ comment.ID }} {{comment.detail}}</p>
        </div>
                
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import { getSingleNews, singleNews } from "@/store/content";
import { useRoute } from 'vue-router';
const route = useRoute()
onMounted(() => {
 getSingleNews(route.params.id); 
})
</script>