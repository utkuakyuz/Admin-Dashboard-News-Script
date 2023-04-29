<template>
  <div class="col col-2 col-xl-2 px-3 side-bar">
    <div class="sticky ">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-1 text-white min-vh-100 mt-3 mx-1">
        <router-link :to="'/'" :class="'align-middle text-white mb-3 px-1'">
          <img src="@/assets/images/asıla.png" style="width:18px; height:18px;" />
          <span class="ms-1 d-none d-sm-inline">Arma Haber</span>
        </router-link>
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/'" aria-expanded="false">
              <fai icon="home" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Anasayfa</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/news/newsPanel'" aria-expanded="false">
              <fai icon="newspaper" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Haberler</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/comments/commentsPanel'"
              aria-expanded="false">
              <fai icon="comments" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Yorumlar</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/user/kullanici'" aria-expanded="false">
              <fai icon="users" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Kullanıcılar</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/user/admintablo'" aria-expanded="false">
              <fai icon="user-shield" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Adminler</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/user/adduser'" aria-expanded="false">
              <fai icon="user-plus" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Kullanıcı Ekle</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/user/addadmin'" aria-expanded="false">
              <fai icon="users-cog" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Admin Ekle</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/news/addnew'" aria-expanded="false">
              <fai icon="file" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Haber Ekle</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/user/aindex'" aria-expanded="false">
              <fai icon="user-circle" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Hesabım</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link align-middle text-white px-3" :to="'/'" aria-expanded="false"
              @click="cikisYap()">
              <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="ms-1 d-none d-sm-inline">Çıkış Yap</span>
            </router-link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>

</template>

<script setup>
import { validat } from "@/store/user";
import { token } from "@/store/user";
import router from "@/router";
const cikisYap = () => {
    Swal.fire({
    title: "Emin misiniz?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Evet, Çıkış Yap!",
  })
  .then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("user_token");
      setTimeout(() => router.go("/"), 2000);
      Swal.fire({
        icon: 'success',
        title: 'Çıkış Yapılıyror',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};
</script>
<style>

.sticky {
  position: sticky;
  top: 0;
}

.nav-link {
  font-size: 16px;
  margin-top: 0.5em;
}
.nav-item :hover {
  color: gray !important;
}
.navbar-brand img {
  width: 32px;
  height: 32px;
  border-radius: 40%;
  overflow: hidden;
}
.side-bar {
  background-color: rgb(47, 47, 47);
}


</style>