<template>

 <div class="wrapper px-4 mt-n10">
  <h3 class="mt-3 mb-3 page-title">Onaylanmış Yorumlar</h3>
  
<div class="card mb-4">
  <div class="card-header">Yayındaki Yorumlar
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
      <div class="table-container px-4 mt-n10 table-responsive">
        <table class="table table-striped table-bordered align-middle text-center">
      <thead>
        <tr>
          <th>ID<fai icon="sort" aria-hidden="true"></fai>
          </th>
          <th>Yazar<fai icon="sort" aria-hidden="true"></fai>
          </th>
          <th class="col-sm-5">İçerik<fai icon="sort" aria-hidden="true"></fai>
          </th>
          <th>Tarih<fai icon="sort" aria-hidden="true"></fai>
          </th>
          <th>Haber<fai icon="sort" aria-hidden="true"></fai>
          </th>
          <th>Reddet</th>
          <th>Yorumu Sil</th>
        </tr>
      </thead>
      <tbody id="">
        <tr v-for="comment in pendingCommentsList.list" :key="comment.ID">
          <td>{{ comment.ID }}</td>
          <td>{{ comment.authorID }}</td>
          <td class="col-sm-2">{{ comment.detail }}</td>
          <td>{{ formatDate(comment.createdAt, full=true, day=true) }}</td>
          <td>{{ comment.newsID }}</td>
          <td><button type="button" class="btn btn-warning btn-md" v-on:click="ConfirmComment(comment.ID, -1)">
              Reddet</button></td>
          <td><button type="button" class="btn btn-danger btn-lg" v-on:click="DeleteComment(comment.ID)">
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
import { deleteComment, confirmComment, getPendingComments, pendingCommentsList, adminChoice} from "@/store/content";
import { onMounted, ref } from "vue";
import { formatDate, TableSort } from "@/lib/setting";
onMounted(() => {
  // // comments
  getPendingComments();
});

function ConfirmComment(id, onay){
  let commentId = ref(id)
  console.log("commentId: ", commentId)
  let adminchs = ref(onay)
  Swal.fire({
    title: "Emin misiniz?",
    showCancelButton: true,
    confirmButtonText: "Evet, onayla!",
  })
  .then((result) => {
      if (result.isConfirmed) {
        confirmComment(commentId.value, adminchs.value);
        Swal.fire("Silindi!", "", "success");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
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
        Swal.fire("Silindi!", "", "success");
        console.log(response);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

</script>