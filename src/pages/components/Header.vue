<template>
  <nav id="top-bar" class="navbar margin-wrapper align-middle navbar-expand-lg navbar-light">
    <div class="d-flex flex-row-reverse col">
      <ul class="navbar-nav  mb-lg-0 me-3">
          <div class="row icons mx-5">
            <div class="col p-0">
              <router-link class="nav-link align-middle text-white mt-0 px-3 pt-0 pb-0" :to="'/user/aindex'" aria-expanded="false">
                <fai icon="user-circle" aria-hidden="true"></fai>
              </router-link>
            </div>
            <div class="col p-0 ">
              <router-link class="nav-link align-middle text-white mt-0 px-3 pt-0 pb-0" :to="'/'" aria-expanded="false"
                @click="cikisYap()">
                <fai icon="sign-out-alt" aria-hidden="true"></fai>
              </router-link>
            </div>
          </div>
        
      </ul>
    </div>
  </nav>
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
/* .navbar-light navbar-brand  */

.navbar-brand {
  color: rgb(255, 255, 255);
}
/* .navbar-brand-a {
  color: rgb(255, 255, 255);
} */
.navbar-expand-lg .navbar-collapse {
  justify-content: center;
}

.navbar-expand-lg .navbar-collapse ul li {
  margin-right: 2em;
}

.navbar-toggler {
  background-color: gray;
  border: 1px solid black;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}
.navbar-dark .navbar-nav .nav-link {
  color: black;
}
.navbar-dark .navbar-brand {
  color: black;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: gray;
}

.navbar.center .navbar-inner .nav {
  display: inline-block;
  float: none;
}

.navbar {
  /* background-color: rgb(33, 37, 41); */
  text-align: left;
  /* background-color: rgb(47, 47, 47); */
  
}

.navbar img {
  width: 46px;
  height: 46px;
  border-radius: 40%;
  overflow: hidden;
}

.top-header {
  background-color: white;
}

.navbar a{
  font-size: 22px;
}
</style>