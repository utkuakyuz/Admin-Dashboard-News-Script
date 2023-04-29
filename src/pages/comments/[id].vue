<template>
<div class="wrapper px-4 mt-n10">
 <h3 class="mt-3 mb-3 page-title">Yorum Detay</h3>
 <div class="card mb-4">
  <div class="card-header">{{ singleComment.ID }} ID'li Yorum Gösterildi  
    <router-link class="nav-link text-black"
    :to="'/comments/commentsTable'" aria-expanded="false" style="float: right;color: black !important;margin-top: 0em;padding: 0rem 0.5rem;">
      <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
    </router-link>
    <router-link class="nav-link text-black" :to="`/comments/edit/${singleComment.ID}`" aria-expanded="false"
      style=" float: right; color: black !important; margin-top: 0em;  padding: 0rem 0.5rem;">
      <fai icon="user-circle" aria-hidden="true"></fai><span class=" d-none d-sm-inline">Yorumu Düzenle</span>
    </router-link>
  </div>
  <div class="card-body">
  <!-- <input type="text" class="mb-5" v-model="singleUser.list.firstName"> -->
  <p>ID: {{ singleComment.ID }}</p>
   <p>ID: {{ singleComment.firstName }}</p>
  <!-- <p>İsim: {{ singleUser.list.firstName }}</p> -->
  <p>Soyisim:{{ singleComment.lastName }}</p>
  <p>Kullanıcı:{{ singleComment.username }}</p>
  <p>Aktiflik: {{ singleComment.isActive }}</p>
   <p>İçerik: {{ singleComment.detail }}</p>
    <p>Tarih: {{ singleComment.createdAt }}</p>
     <p>Haber ID: {{ singleComment.newsID }}</p>
  </div>
</div>
</div>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue";
import { getSingleComment, singleComment } from "@/store/content";
import { useRoute } from 'vue-router';

const route = useRoute()
onMounted(() => {
 getSingleComment( route.params.id ); 
})
</script>