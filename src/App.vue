<template>
  <Login v-if="token"/>
  <div class="content-page" style="max-width: 100%; width:100%;" v-else>
    <div class="row flex-nowrap" style="max-width: 100%;  margin:0">
    <Appsidebar/>
    <div class="col col-10 p-0 m-0">
      <div class="header-holder  bg-dark"><Header/></div>
      <div class="page-holder">
        <div class="wrapper margin-wrapper mt-3">
        <router-view/></div></div>
    </div>
  </div>
  </div>



  <!-- <div class="content-page" v-else>
    <Header/>
    <div class="row flex-nowrap" style="max-width:100%">
      <Appsidebar/>
      <div class="col col-9 py-3 pl-3 mx-3">
        <router-view/>
      </div>
    </div>
  </div> -->
</template>
<script setup>
import Header from "@/pages/components/Header.vue";
import Appsidebar from "@/pages/components/Appsidebar.vue";
import Login from "@/pages/login.vue";
import {validat} from '@/store/user';

const token = localStorage.getItem('user_token')
</script>
<style>
body{
  background-color: #f1f1f1 !important;
}
.margin-wrapper{
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>