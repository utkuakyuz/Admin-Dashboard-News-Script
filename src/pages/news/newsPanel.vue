<template>
  <div class="wrapper px-4 mt-n10">
    <h3 class="mt-3 mb-3 page-title">Haberler</h3>
    <div class="row">
      <div class="col mb-5">
        <div class="card bg-primary text-white h-100 card-1">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="me-3">
                <div class="h-100 p-3 text-white rounded-3">
                  <h3>Yayındaki Haberleri Görmek İçin Tıkla</h3>
                  <p>
                    Yayınlanmış Haber Sayısı: {{ liveNewsList.list.length }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="
              card-footer
              mt-5
              d-flex
              align-items-center
              justify-content-between
              small
            ">
            <router-link class="stretched-link text-white" :to="'/news/newsTable'">Tamamını Görüntüle</router-link>
            <fai icon="caret-right" aria-hidden="true"></fai>
          </div>
        </div>
      </div>
      <div class="col mb-5">
        <div class="card bg-secondary text-white h-100 card-2">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="h-100 p-3 text-white rounded-3">
                <h3>Tüm Haberleri Görmek İçin Tıkla</h3>
                <p>Toplam Haber Sayısı: {{ newsList.list.length }}</p>
              </div>
            </div>
          </div>
          <div class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            ">
            <router-link class="stretched-link text-white" :to="'/news/newsTable'">Tamamını Görüntüle
            </router-link>
            <fai icon="caret-right" aria-hidden="true"></fai>
            <!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mb-5">
        <div class="card bg-warning text-white h-100 card-3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="h-100 p-3 text-white rounded-3">
                <h3>Onay Bekleyen Haberleri Görmek İçin Tıkla</h3>
                <p>Bekleyen Haber Sayısı: {{ pendingNewsList.list.length }}</p>
              </div>
            </div>
          </div>
          <div class="
              card-footer
              mt-5
              d-flex
              align-items-center
              justify-content-between
              small
            ">
            <router-link class="stretched-link text-white" :to="'/news/pendingNews'">Tamamını Görüntüle
            </router-link>
            <fai icon="caret-right" aria-hidden="true"></fai>
          </div>
        </div>
      </div>
      <div class="col mb-5">
        <div class="card bg-danger text-white h-100 card-4">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="h-100 p-3 text-white rounded-3">
                <h3>Silinmiş Haberleri Görmek İçin Tıkla</h3>
                <p>Silinen Haber Sayısı: {{ deletedNewsList.list.length }}</p>
              </div>
            </div>
          </div>
          <div class="
              card-footer
              mt-5
              d-flex
              align-items-center
              justify-content-between
              small
            ">
            <router-link class="stretched-link text-white" :to="'/news/deletedNews'">Tamamını Görüntüle
            </router-link>
            <fai icon="caret-right" aria-hidden="true"></fai>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  getPendingNews,
  liveNews,
  liveNewsList,
  deletedNews,
  deletedNewsList,
  pendingNewsList,
  newsList,
  getNews,
} from "@/store/content";
getNews();
getPendingNews();
deletedNews();
liveNews();
</script>
<style>
.card-1 {
  background-color: #809bce !important;
}

.card-2 {
  background-color: #95b8d1 !important;
}

.card-3 {
  background-color: #eac4d5 !important;
}

.card-4 {
  background-color: #8cbbaa !important;
}
</style>