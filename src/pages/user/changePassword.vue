<template>
    <div class="wrapper px-4 mt-n10">
      <h3 class="page-title mb-3 mt-3">Admin Profili</h3>
      <div class="card mb-4">
        <div class="card-header">
          Şifre Değişiklik
          <router-link class="nav-link text-black" :to="'/user/aindex'" aria-expanded="false" style="
              float: right;
              color: black !important;
              margin-top: 0em;
              padding: 0rem 0.5rem;
            ">
            <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
          </router-link>
        </div>
        <div class="px-4 mt-n10">
          <ChangePassword />
        </div>
      </div>
    </div>
</template>
<script setup>
import ChangePassword from "@/pages/components/forms/changePassword.vue";
import { reactive } from "vue";

let form = reactive({
  firstName: "",
  lastName: "",
  country: "",
  city: "",
  emailAddress: "",
  phoneNumber: "",
});

const sendData = () => {
  console.log(form);
};
</script>