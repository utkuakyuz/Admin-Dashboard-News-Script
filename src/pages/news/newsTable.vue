<template>
  <div class="wrapper px-4 mt-n10">
    <h3 class="mt-3 mb-3 page-title">Tüm Haberler</h3>
    <div class="card mb-4">
      <div class="card-header">Haberler Tablosu
        <router-link class="nav-link text-black" :to="'/news/newsPanel'" aria-expanded="false" style="
              float: right;
              color: black !important;
              margin-top: 0em;
              padding: 0rem 0.5rem;
            ">
          <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
        </router-link>
      </div>
      <div class="card-body">
        <div class="fixed-columns">
          <div class="table-container px-4  mt-n10 table-responsive">
            <table class="table table-striped table-bordered align-middle text-center">
              <thead>
                <tr>
                  <th>ID <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Yazar <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Başlık <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Tarih <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Type <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Kategori <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Detay</th>
                </tr>
              </thead>
              <tbody id="paginate">
                <tr v-for="card in newsList.list" :key="card.ID">
                  <td>{{ card.ID }}</td>
                  <td>{{ card.username }}</td>
                  <td>{{ card.title }}</td>
                  <td>{{ formatDate(card.createdAt, full=true, day=true) }}</td>
                  <td>{{ card.newstype }}</td>
                  <td>{{ card.category }}</td>
                  <td>
                    <router-link class="btn button allign-middle card-1 btn-md" :to="`/news/${card.ID}`" tag="button">Detay</router-link>
                  </td>
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
import { newsList, getNews, getSingleNews } from '@/store/content';
import { formatDate, TableSort,Paginate } from '@/lib/setting';
import { onMounted,onUpdated } from 'vue';
import { ref } from 'vue';
import router from '@/router';

onMounted(() => {
  // // comments
  getNews();
  TableSort();
});

//  onUpdated(() => {
//   if(newsList.list.length > 0){
//       new Paginate("paginate","tr",5);
//   }
// });

const DetailNews = (id) => {
    console.log("DetailNews içerisinde")
    let newId = ref(id)
}
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