<template>

  <div class="wrapper px-4 mt-n10">
    <h3 class="mt-3 mb-3 page-title">Tüm Yorumlar</h3>
   
    <div class="card mb-4">
      <div class="card-header">Yorumlar Tablosu
         <router-link
            class="nav-link text-black"
            :to="'/comments/commentsPanel'"
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
          <div class="table-container px-4  mt-n10 table-responsive">
            <table class="table table-striped table-bordered align-middle text-center">
              <thead>
                <tr>
                  <th>ID<fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Yazar<fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th class="col-sm-2">İçerik<fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Tarih<fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Haber<fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Kabul</th>
                  <th>Aktiflik</th>
                  <th>Detay</th>
                  <th>Yorumu Sil</th>
                </tr>
              </thead>
              <tbody id="">
                <tr v-for="comment in commentsList.list" :key="comment.ID">
                  <td>{{ comment.ID }}</td>
                  <td>{{ comment.username }}</td>
                  <td class="col-sm-2">{{ comment.detail }}</td>
                  <td>{{ formatDate(comment.editedAt, full=true, day=true) }}</td>
                  <td>{{ comment.newsID }}</td>
                  <td>{{comment.isAccepted}}</td>
                  <td>{{comment.isActive}}</td>
                  <td><router-link class="btn button allign-middle card-1 btn-md" :to="`/comments/${comment.ID}`">Detay</router-link></td>
                  <td><button type="button" class="btn btn-danger btn-md" v-on:click="DeleteComment(comment.ID)">
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
import { commentsList } from '@/store/content';
import { getComments, deleteComment } from '@/store/content';
import { formatDate, TableSort,Paginate } from '@/lib/setting'
import { onMounted,onUpdated, ref } from 'vue';
import router from '@/router';
onMounted(() => {
  // // comments
  getComments();
  TableSort();
});
function DeleteComment(id) {
  let commentId = ref(id)
  console.log("commentId", commentId)
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
        deleteComment(commentId.value);
        Swal.fire("Başarılı!", "", "success");
        setTimeout(() => router.go(0), 1000);
        Swal.fire("Sayfa Yenileniyor!", "", "success");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}



//  onUpdated(() => {
 
//   if(commentsList.list.length > 0){
//       new Paginate("paginate","tr",10);
//     }
//   });
  
  </script>


<style>
.float-right{
  float:right;
}

.page-buttons-container{

display:contents !important;
}

.page-button {
    padding: 2px 8px !important;
    border-radius: 50% !important;
    background-color: #257ab5 !important;
    color: white !important;
    margin: 5px 5px;
}

.active{
  border: 2px solid  #353634 !important;
}
</style>