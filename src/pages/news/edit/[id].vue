<template>
  <!-- <div class="wrapper px-4 mt-n10">
    <h3 class="mt-3 mb-3 page-title">Haber Düzenleme</h3>
    <div class="card mb-4">
      <div class="card-header"> ID'li Haber Gösterildi <router-link class="nav-link text-black" :to="'/news/newsTable'"
          aria-expanded="false" style="float: right;color: black !important;margin-top: 0em;padding: 0rem 0.5rem;">
          <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
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
  </div> -->
  <div class="wrapper px-4 mt-n10">
    <h3 class="mb-3 mt-3 page-title">Haberi Düzenle</h3>
    <div class="card mb-4">
      <div class="card-header"> ID numaralı haberi düzenle
        <router-link class="nav-link text-black" :to="`/news/${route.params.id}`" aria-expanded="false" style="float: right;color: black !important;margin-top: 0em;padding: 0rem 0.5rem;">
          <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
        </router-link>
      </div>
      <div class="card-body">
        <div class="fixed-columns">
          <form method="post" action="#" @submit.prevent="sendData">
            <div class="form-group">
              <label for="fname" class="control-label">Başlık</label>
              <div class>
                <input type="text" v-model="singleNews.detail.title" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <label for="fname" class="control-label">Tags</label>
              <div class>
                <input type="text" v-model="singleNews.detail.summary" class="form-control" id="fname" placeholder />
              </div>
            </div>            
            <!-- <div class="form-group">
              <label for="lname" class="control-label">Soyisim</label>
              <div class>
                <input type="text" v-model="singleNews.detail.category" class="form-control" id="fname" placeholder />
              </div>
            </div> -->
            <div class="form-group">
              <label class="control-label">Yazar</label>
              <div class>
                <input type="text" v-model="singleNews.detail.username" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Detay</label>
              <div class>
                <!-- <input type="text" v-model="singleNews.detail.newsDetail" class="form-control h-50" id="fname" placeholder /> -->
                <textarea class="form-control" v-model="singleNews.detail.newsDetail" rows="5"></textarea>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Haber Tipi</label>
              <div class>
                <input type="text" v-model="singleNews.detail.newstype" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <select class="form-group form-select" v-model="singleNews.detail.category">
                <option value="1">Dünya</option>
                <option value="0" selected="selected">Mevcut</option>
                <option value="2">Siyaset</option>
                <option value="3">Futbol</option>
             </select>
            </div>
            <div class="row border-top border-secondary mt-3">
              <div class="col-12">
                <div class="form-group">
                  <div class="p-t-20">
                    <button class="btn btn-success float-right mt-3" type="submit">Haberi Güncelle</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import { getSingleNews, singleNews, updateNew } from "@/store/content";
import { useRoute } from 'vue-router';
// import route from "@/router";
const route = useRoute()
onMounted(() => {
 getSingleNews(route.params.id); 
})
let form = ref([
  { categoryID: singleNews.detail.category, typeID: 1, title: singleNews.detail.title, summary: singleNews.detail.summary, authorID: 2 },
  { detail: singleNews.detail.newsDetail, video: null, image: null, videodetail: "" },
]);

const sendData = () => {
  let categoryID = singleNews.detail.category
  let title = singleNews.detail.title
  let summary = singleNews.detail.summary
  let detail = singleNews.detail.newsDetail
  // console.log("Form6::", form6.firstName);
   let ID = route.params.id;
   console.log("en baştıan ID", ID)
  //  updateUser(ID, {permissions: form6.permissions },{firstName: form6.firstName },{lastName: form6.lastName },{email: form6.email });
      updateNew(ID , title, summary, detail);
};

</script>

<style>
.form-group{
  margin-top: 15px;
}
</style>