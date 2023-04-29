<template>
<div class="wrapper px-4 mt-n10">
  <h3 class="mb-3 mt-3 page-title">Yöneticiler</h3>
  <div class="card mb-4">
    <div class="card-header">Mevcut Admin Tablosu</div>
    <div class="card-body">
      <div class="fixed-columns">
        <div class="table-container px-4 mt-n10 table-responsive">
          <table class="table table-striped table-bordered align-middle text-center">
            <thead>
              <tr>
                <th>ID <fai icon="sort" aria-hidden="true"></fai>
                </th>
                <th>İsim <fai icon="sort" aria-hidden="true"></fai>
                </th>
                <th>Soyisim <fai icon="sort" aria-hidden="true"></fai>
                </th>
                <th>Kullanıcı Adı <fai icon="sort" aria-hidden="true"></fai>
                </th>
                <th>Mail <fai icon="sort" aria-hidden="true"></fai>
                </th>
                <th>Yetki <fai icon="sort" aria-hidden="true"></fai>
                </th>
                <th>Aktiflik <fai icon="sort" aria-hidden="true"></fai>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="admin in adminList.list" :key="admin.ID">
                <td>{{ admin.ID }}</td>
                <td>{{ admin.firstName }}</td>
                <td>{{ admin.lastName }}</td>
                <td>{{ admin.username }}</td>
                <td>{{ admin.email }}</td>
                <td>{{ admin.permissions }}</td>
                <td>{{ admin.isActive}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-4">
    <div class="card-header"></div>
    <div class="card-body">
      <div class="fixed-columns">
        <div class="table-container px-4 mt-n10 table-responsive">
          <table class="table table-striped table-bordered text-center">
            <thead>
              <tr>
                <th>Toplam Admin Sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{adminList.list.length}}</td>
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
import { adminList, getAdmins  } from '@/store/content';
import { onMounted } from 'vue';
import { TableSort } from '@/lib/setting';
import router from '@/router';

onMounted(() => {
  getAdmins();
  TableSort();
});
</script>

<style>
.float-right{
  float:right;
}
</style>