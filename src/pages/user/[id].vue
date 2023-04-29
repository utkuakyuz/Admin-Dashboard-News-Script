<template>
<div class="wrapper px-4 mt-n10">
 <h3 class="mt-3 mb-3 page-title">Kullanıcı Detay</h3>
 <div class="card mb-4">
  <div class="card-header">{{ singleUserd.ID }} ID'li Kullanıcı Gösterildi  
    <router-link class="nav-link text-black"
    :to="'/'" aria-expanded="false" style="
            float: right;
            color: black !important;
            margin-top: 0em;
            padding: 0rem 0.5rem;
            ">
      <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
    </router-link>
    <router-link class="nav-link text-black" :to="`/user/edit/${singleUserd.ID}`" aria-expanded="false"
      style=" float: right; color: black !important; margin-top: 0em;  padding: 0rem 0.5rem;">
      <fai icon="user-circle" aria-hidden="true"></fai><span class=" d-none d-sm-inline">Profili Düzenle</span>
    </router-link>
  </div>
  <div class="card-body">
  <!-- <input type="text" class="mb-5" v-model="singleUser.list.firstName"> -->
  <p>ID: {{ singleUserd.ID }}</p>
  <!-- <p>İsim: {{ singleUser.list.firstName }}</p> -->
  <p>Soyisim:{{ singleUserd.lastName }}</p>
  <p>E-mail Adresi: {{ singleUserd.email }}</p>
  <p>İzinler: {{ singleUserd.permissions }}</p>
  <p>Aktiflik: {{ singleUserd.isActive }}</p>
  </div>
</div>
</div>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue";
import { getSingleUser, singleUser, singleUserd } from "@/store/content";
import { useRoute } from 'vue-router';

const route = useRoute()
onMounted(() => {
 getSingleUser(route.params.id); 
})
</script>