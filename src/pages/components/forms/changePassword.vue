<template>
  <div class="container py-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-lg-9 col-xl-7">
        <div
          class="card shadow-2-strong card-registration"
          style="border-radius: 15px"
        >
          <div class="card-body p-4 p-md-5" style="color: black">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5" style="color: black">Şifrenizi Değiştirin</h3>
            <form method="post" action="#" @submit.prevent="sendData">

              <div class="row">
                <div class="mb-4 pb-2">
                  <div class="form-outline">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      v-model="form.emailAddress"
                    />
                    <label class="form-label" for="emailAddress"
                      >E-Posta Adresiniz</label
                    >
                  </div>
                </div>
                <div class="mb-4 pb-2">
                  <div class="form-outline">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      v-model="form.password"
                    />
                    <label class="form-label" for="phoneNumber"
                      >Yeni Şifreniz</label
                    >
                  </div>
                </div>
                <div class="mb-4 pb-2">
                  <div class="form-outline">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      v-model="form.passwordAgain"
                    />
                    <label class="form-label" for="passwordAgain"
                      >Yeni Şifreniz Tekrar</label
                    >
                  </div>
                </div>
              </div>

              <div class="mt-4 pt-2">
                <input
                  class="btn btn-primary btn-lg"
                  type="submit"
                  value="Şifremi Değiştir"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
let form = reactive({
  emailAddress: "",
  password: "",
  passwordAgain: "",
});

const sendData = () => {
  console.log(form);
};
</script>