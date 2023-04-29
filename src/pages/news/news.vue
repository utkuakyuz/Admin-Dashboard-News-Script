<template>
    <router-link :to="'/news/newsTable'">
        <span class="ms-1 d-none d-sm-inline">
            <h3>Tablo Olarak Görmek İçin Tıkla</h3>
        </span>
    </router-link>
    <section id="newscards" v-if="singleNews.loader">
        <div class="card mb-3" style="max-width: 800px;" v-for="card in newsList.list" :key="card.ID">
            <div class="row g-0">
                <div class="col" style="max-width:150px">
                    <img src="@/assets/images/day.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>{{ formatDate(card.createdAt, full = true, day = true) }}</span>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>Author: {{ card.username }}</span>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>Category: {{ card.category }}</span>
                            <br>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>Kabul Edildi: {{ card.isAccepted }}</span>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>Aktiflik: {{ card.isActive }}</span>
                        </p>
                        <h5 class="card-title">{{ card.title }}</h5>
                        <p class="card-text">{{ card.summary }}</p>
                        <button @click="DetailNews(card.ID)">Detay</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <button type="button" class="btn btn-success btn-sm" @click="singleNews.loader = true"> Geri Dön </button>
        <h5>Single New Sayfası</h5>
        <!-- <p>{{ singleNews.detail.news }}</p> -->
        <p>Haber ID'si: {{ singleNews.detail.news.ID }}</p>
        <p>Haber Başlığı: {{ singleNews.detail.news.title }} </p>
        <p>Haber Özeti: {{ singleNews.detail.news.summary }} </p>
        <p>Haber Kategorisi: {{ singleNews.detail.news.category }} </p>
        <p>Haber Tipi: {{ singleNews.detail.news.newstype }} </p>
        <p>Haber Yazarı: {{ singleNews.detail.news.username }} </p>
        <p>Haber Eklenme Tarihi: {{ formatDate(singleNews.detail.news.createdAt, (full = true), (day = true)) }} </p>
        <p>Haber İçeriği: {{singleNews.detail.news.newsDetail}}</p>

        <p>{{ singleNews.detail.comment }}</p>
    </section>
</template>

<script setup>
    import {
        newsList,
        singleNews,
        getNews,
        getSingleNews
    } from '@/store/content';
    import {
        onMounted,
        ref
    } from 'vue';
    import {
        formatDate
    } from '@/lib/setting'
    import router from '@/router';
    onMounted(() => {
        getNews();
    });

    function DetailNews(id) {
        singleNews.loader = false
        let newId = ref(id)
        console.log("DetailNews içerisinde newId.value:", newId.value)
        getSingleNews(newId.value)
    }
</script>
<style>
    #newscards span {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
</style>