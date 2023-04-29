<template>
 <div class="wrapper px-4 mt-n10">
  <h3 class="mt-3 mb-3 page-title">Onay Bekleyen Haberler</h3>
 
  <div class="card mb-4">
   <div class="card-header">Onay Bekleyen Haberler
      <router-link
            class="nav-link text-black"
            :to="'/news/newsPanel'"
            aria-expanded="false"
            style="
              float: right;
              color: black !important;
              margin-top: 0em;
              padding: 0rem 0.5rem;
            "
          >
            <fai icon="sign-out-alt" aria-hidden="true"></fai
            ><span class="d-none d-sm-inline">Geri Dön</span>
          </router-link>
   </div>
   <div class="card-body">
    <div class="fixed-columns">
     <div class="table-container px-4 mt-n10 table-responsive">
      <table class="table table-striped table-bordered align-middle text-center">
       <thead>
        <tr>
         <th>ID<fai icon="sort" aria-hidden="true"></fai>
         </th>
         <th>Yazar<fai icon="sort" aria-hidden="true"></fai>
         </th>
         <th>Başlık</th>
         <th class="col-sm-5">Özet<fai icon="sort" aria-hidden="true"></fai>
         </th>
         <th>Tarih<fai icon="sort" aria-hidden="true"></fai>
         </th>
         <th>Onayla</th>
         <th>Reddet</th>
         <th>Sil</th>
        </tr>
       </thead>
       <tbody id="">
        <tr v-for="New in pendingNewsList.list" :key="New.ID">
         <td>{{ New.ID }}</td>
         <td>{{ New.username }}</td>
         <td>{{ New.title}}</td>
         <td class="col-sm-2">{{ toShortSentence(New.summary) }}</td>
         <td>{{ formatDate(New.createdAt, full=true, day=true) }}</td>
         <td><button type="button" class="btn card-4 btn-md" v-on:click="ConfirmNew(New.ID, 1)">
           Onayla</button></td>
         <td><button type="button" class="btn card-2 btn-md" v-on:click="ConfirmNew(New.ID, -1)">
           Reddet</button></td>
         <td><button type="button" class="btn btn-danger btn-lg" v-on:click="DeleteNew(New.ID)">
           Sil</button></td>
        </tr>
       </tbody>
      </table>
     </div>
    </div>
   </div>
  </div>

 </div>
</template>

<script setup>
import { formatDate, TableSort, toShortSentence } from "@/lib/setting";
import {  confirmNew, getPendingNews, pendingNewsList, adminChoice, deleteNew} from "@/store/content";
import { ref } from "vue";
getPendingNews();
function ConfirmNew(id, onay){
  let newID = ref(id)
  let adminchs = ref(onay)
  Swal.fire({
    title: "Emin misiniz?",
    showCancelButton: true,
    confirmButtonText: "Evet, onayla!",
  })
  .then((result) => {
      if (result.isConfirmed) {
        confirmNew(newID.value, adminchs.value);
        Swal.fire("Başarılı", "", "success");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
function DeleteNew(id) {
  let newId = ref(id)
  Swal.fire({
    title: "Emin misiniz?",
    text: "Bu işlemi geri alamayacaksınız !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Evet, sil!",
  })
    .then((result) => {
      if (result.isConfirmed) {
        deleteNew(newId.value);
        Swal.fire("Başarılı!", "", "success");
        setTimeout(() => router.go(0), 1000);
        Swal.fire("Sayfa Yenileniyor!", "", "success");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>