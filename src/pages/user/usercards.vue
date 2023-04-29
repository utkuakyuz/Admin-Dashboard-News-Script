<template>
<router-link :to="'/user/kullanici'" ><span class="ms-1 d-none d-sm-inline"><h3>Tablo Olarak Görmek İçin Tıklayın</h3></span></router-link>
    <section id="usercards" v-if="singleUser.loader"> 
        <div class="card mb-3" style="max-width: 800px;" v-for="user in userList.list" :key="user.ID">
            <div class="row g-0">
                <div class="col" style="max-width:150px">
                    <img src="@/assets/images/day.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">{{user.username}}</h5>
                        <p class="card-text">
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>Katıldığı Tarih: {{ formatDate(user.joinedAt, full = true, day = true) }}</span>
                            <br>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>ID: {{ user.ID }}</span>
                            <br>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>Eposta: {{ user.email }}</span>
                            <br>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>İzinler: {{ user.permissions }}</span>
                            <br>
                            <fai icon="caret-right" aria-hidden="true"></fai>
                            <span>Aktiflik: {{ user.isActive }}</span>
                        </p>
                        <button @click="getUser(user.ID)"> Detay </button>
                        <!-- <button @click="DetailNews(card.ID)">Detay</button> -->
                        <button>Düzenle</button> <button>Yasakla</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <button type="button" class="btn btn-success btn-sm m-3" @click="singleUser.loader = true"> Geri Dön </button>
        <h3>{{ singleUser.list.ID }} id'li User Başarılı bir şekilde Gösterildi</h3>
        <p>{{ singleUser.list }}</p>
    </section>
</template>
<script setup>
    import {
        userList,
        singleUser,
        getUsers,
        getSingleUser
    } from '@/store/content';
    import {
        onMounted,
        onUpdated,
        ref
    } from 'vue';
    import {
        formatDate,
        TableSort,
        Paginate
    } from '@/lib/setting';

    onMounted(() => {
        // // comments
        getUsers();
    });
    function getUser(id){
        let userId = ref(id)
        getSingleUser(userId.value)
    }
</script>

<style>
span{
    padding-left: 0.2em;
    padding-right: 0.2em;
}
</style>