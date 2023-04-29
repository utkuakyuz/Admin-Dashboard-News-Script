<template>
  <div>
    <div class="rounded-top text-white d-flex flex-row" style="height: 200px;">
      <div class="d-flex flex-column" style="width: 150px">
        <img src="@/assets/images/person-icon.png" alt="Generic placeholder image" class="img mt-4 mb-2"
          style="width: 150px !important; z-index: 1" />
      </div>
      <div class="card-body p-0 text-black">
        <div class="mb-2s">
          <div class="p-4">
            <h5>İsim Soyisim: {{ adminProfile.firstName }} {{ adminProfile.lastName }}</h5>
            <p>E-mail Adresi: {{ adminProfile.email }}</p>
            <p>Kullanıcı Adı: {{ adminProfile.username }}</p>
            <span class="font-italic mb-1">Yetki: {{adminProfile.permissions}}</span> &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { getAdminProfile, adminProfile } from "@/store/content";
onMounted(() => {
  // // comments
  getAdminProfile();
});
</script>
<style >
.ms-3 {
  color: black;
}
</style>