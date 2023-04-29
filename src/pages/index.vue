<template>
  <div class="wrapper mt-n10">
    <h3 class="mb-3 mt-3 page-title">Anasayfa</h3>
    <!-- Giriş Grafikler -->
    <section id="Grafikler">
      <Plots />
    </section>
    <!-- Entrance Box -->
    <div class="row">
      <div class="col mb-4">
        <div class="card h-100">
          <div class="card-header">Son Aktiviteler</div>
          <div class="card-body"></div>
          <div class="card-footer position-relative">
            <div class="d-flex align-items-center justify-content-between small text-body ">
              <router-link :to="'/'" class="stretched-link text-body">Görüntüle
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">Yapılacaklar Görevler</div>
          <div class="card-body"></div>
          <div class="card-footer position-relative">
            <div class="d-flex align-items-center justify-content-between small text-body ">
              <router-link :to="'/'" class="stretched-link text-body">Görevleri Görüntüle
              </router-link>
              <!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Colored Box -->
    <div class="row">
      <div class="col mb-4">
        <div class="card text-white h-100 card-1">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="me-3">
                <div class="text-white-75 small">
                  Yayındaki Haber ve Yorum Sayısı
                </div>
                <div class="text-lg fw-bold">
                  Haber: {{ liveNewsList.list.length }}
                </div>
                <div class="text-lg fw-bold">
                  Yorum: {{ liveCommentsList.list.length }}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex align-items-center justify-content-between small ">
            <router-link :to="'/news/newsTable'" class="text-white stretched-link">Tamamını Görüntüle</router-link>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card card-2 text-white h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="me-3">
                <div class="text-white-75 small">Üye Sayısı</div>
                <div class="text-lg fw-bold">
                  Üye: {{ userList.list.length }}
                </div>
                <div class="text-lg fw-bold">
                  Yönetici: {{ adminList.list.length }}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex align-items-center justify-content-between small ">
            <router-link :to="'/user/kullanici'" class="text-white stretched-link">Tamamını Görüntüle</router-link>
            <!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card card-3 text-white h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="me-3">
                <div class="text-white-75 small">Onay Bekleyenler</div>
                <div class="text-lg fw-bold">
                  Haber: {{ pendingNewsList.list.length }}
                </div>
                <div class="text-lg fw-bold">
                  Yorum: {{ pendingCommentsList.list.length }}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex align-items-center justify-content-between small ">
            <router-link :to="'/'" class="text-white stretched-link">Tamamını Görüntüle</router-link>
            <div class="text-white">
              <!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card card-4 text-white h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="me-3">
                <div class="text-white-75 small">Günlük Ziyaret</div>
                <div class="text-lg fw-bold">140</div>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex align-items-center justify-content-between small ">
            <router-link :to="'/'" class="text-white stretched-link">Detaylar</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- DataTable -->
    <section id="datagraphs" class="mt-3 mb-5">
      <Tablolar />
    </section>
  </div>
</template>

<script setup>
import Tablolar from "@/pages/components/charts/tables.vue";
import Plots from "@/pages/components/charts/charts.vue";
import {
  newsList,
  getNews,
  commentsList,
  userList,
  getAdmins,
  adminList,
  getUsers,
  getPendingComments,
  pendingCommentsList,
  pendingNewsList,
  getPendingNews,
  liveCommentsList,
  liveNewsList,
  liveComments,
  liveNews,
  getComments,
} from "@/store/content";
import { formatDate, TableSort } from "@/lib/setting";
import { onMounted } from "vue";
import { reactive, ref } from "vue";
getNews();
getUsers();
getComments();
getPendingComments();
getPendingNews();
liveComments();
liveNews();
getAdmins();
const DetailNews = (id) => {
  console.log("DetailNews içerisinde");
  let newId = ref(id);
};
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