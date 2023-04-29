<template>
    <div class="row align-items-md-stretch">
        <div class="col-md-6 mt-1">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Kullanıcılar Tablosu</h2>
                <p>Mevcut Kullanıcı Sayısı: {{ userList.list.length }}</p>
                <p>Aktif Kullanıcı Sayısı: {{ userList.list.length }}</p>
                <button class="btn btn-outline-light p-1" type="button">Tabloyu Görüntüle</button>
            </div>
        </div>
        <div class="col-md-6 mt-1">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Haberler Tablosu</h2>
                <p>Toplam Haber Sayısı: {{newsList.list.length}}</p>
                <p>Yayındaki Haber Sayısı: {{liveNewsList.list.length}}</p>
                <button class="btn btn-outline-light p-1" type="button">Tabloyu Görüntüle</button>
            </div>
        </div>
    </div>
    <div class="row align-items-md-stretch mt-3">
        <div class="col-md-6 mt-1">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Yorumlar Tablosu</h2>
                <p>Toplam Yorum Sayısı: {{commentsList.list.length}}</p>
                <p>Aktif Yorum Sayısı: {{liveCommentsList.list.length}}</p>
                <button class="btn btn-outline-light p-1" type="button">Tabloyu Görüntüle</button>
            </div>
        </div>
        <div class="col-md-6 mt-1">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Medya Tablosu</h2>
                <p>Mevcut Fotoğraf Sayısı:</p>
                <p>Aktif Video Sayısı:</p>
                <button class="btn btn-outline-light p-1" type="button">Tabloyu Görüntüle</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
  newsList,
  getNews,
  userList,
  getAdmins,
  adminList,
  getUsers,
  liveCommentsList,
  liveNewsList,  liveComments,
  liveNews, getComments, commentsList,
} from "@/store/content";
getNews();
getComments();
getUsers();
liveComments();
liveNews();
getAdmins();
</script>