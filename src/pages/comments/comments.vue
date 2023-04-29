<template>

  <div class="row">
    <router-link :to="'/news/commentsTable'">
      <span class="ms-1 d-none d-sm-inline">
        <h3>Tablo Olarak Görmek İçin Tıkla</h3>
      </span>
    </router-link>
  </div>
  <div class="pw-3 ml-3 row align-items-md-stretch">
    <div class="col-md-6">
      <h4 class="card-title">Onay Bekleyen Yorumlar</h4>
      <div class="comment-card" v-for="comment in pendingCommentsList.list" :key="comment.ID">
        <div class="d-flex flex-row comment-row p-3 border">
          <div class="comment-text w-100">
            <h5>Yorum ID'si: {{comment.ID}}</h5>
            <h5 class="font-medium">News ID: {{ comment.newsID }}</h5>
            <h5>Author ID: {{ comment.username }}</h5>
            <span class="m-b-15 d-block">{{ comment.detail }}</span>
            <div class="comment-footer">
              <span class="text-muted float-right">{{
                formatDate(comment.editedAt, (full = true), (day = true))
              }}</span> <br>
              <button class="btn btn-success btn-sm" v-on:click="ConfirmComment(comment.ID, 1)">
                Onayla
              </button>
              <button class="btn btn-success btn-sm" v-on:click="ConfirmComment(comment.ID, -1)">
                Onaylama
              </button>
              <button class="btn btn-danger btn-sm" v-on:click="DeleteComment(comment.ID)">
                Sil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4 class="card-title">Son Yorumlar</h4>
      <div class="comment-card" v-for="comment in commentsList.list" :key="comment.ID">
        <div class="d-flex flex-row comment-row p-3 border">
          <div class="comment-text w-100">
            <h5>Yorum ID'si: {{comment.ID}}</h5>
            <h5 class="font-medium">News ID: {{ comment.newsID }}</h5>
            <h5>Author ID: {{ comment.username }}</h5>
            <span class="m-b-15 d-block">{{ comment.detail }}</span>
            <div class="comment-footer">
              <span class="text-muted float-right">{{
                formatDate(comment.editedAt, (full = true), (day = true))
              }}</span> <br>
              <button type="button" class="btn btn-success btn-sm" v-on:click="ConfirmComment(comment.ID, 1)">
                Onayla
              </button>
              <button type="button" class="btn btn-danger btn-sm" v-on:click="DeleteComment(comment.ID)">
                Sil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getComments,commentsList, deleteComment, confirmComment, getPendingComments, pendingCommentsList, adminChoice} from "@/store/content";
import { onMounted, ref } from "vue";
import { formatDate, TableSort } from "@/lib/setting";
onMounted(() => {
  // // comments
  getComments();
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

<style>
.comment-card button {
  width: 75px;
  margin-left: 5px;
}
</style>

