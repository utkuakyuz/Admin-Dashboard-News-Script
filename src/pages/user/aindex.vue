<template>
  <div class="wrapper px-4 mt-n10">
    <h3 class="page-title mb-3 mt-3">Admin Profili</h3>
    <div class="card mb-4">
      <div class="card-header">
        Profilim
        <router-link class="nav-link text-black" :to="'/user/changePassword'" aria-expanded="false"
          style=" float: right; color: black !important; margin-top: 0em; padding: 0rem 0.5rem;">
          <fai icon="users-cog" aria-hidden="true"></fai><span class=" d-none d-sm-inline">Şifremi Değiştir</span>
        </router-link>
        <router-link class="nav-link text-black" :to="'/user/settings'" aria-expanded="false"
          style=" float: right; color: black !important; margin-top: 0em;  padding: 0rem 0.5rem;">
          <fai icon="user-circle" aria-hidden="true"></fai><span class=" d-none d-sm-inline">Profili Düzenle</span>
        </router-link>
      </div>
      <div class="card-body">
        <div class="px-4 mt-n10">
          <div class="row g-2">
            <div class="col">
              <UserBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserBanner from "@/pages/components/user/userBanner.vue";
import { adminProfilea,  adminProfile,  getAdminProfile} from "@/store/content";
</script>
<style >
#panel .container .row {
  background-color: white;
  border-radius: 5%;
}
.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: rgb(99, 39, 120);
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}

#user-info {
  text-align: center;
}
</style>

