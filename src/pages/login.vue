<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div>
          <div v-if="Loginvalue === 1">
            <div class="card px-5 py-5" id="form1">
              <img
                src="@/assets/images/day.jpg"
                alt="Generic placeholder image"
                style="width: 10em; height: 10em"
                class="center"
              />

              <form action="#" @submit.stop.prevent="sendData" v-if="!token">
                <div class="form-data">
                  <div class="forms-inputs mb-4">
                    <span>Email or username</span>
                    <input
                      autocomplete="off"
                      type="text"
                      v-model="form4.email"
                    />
                    <div class="invalid-feedback">
                      A valid email is required!
                    </div>
                  </div>
                  <div class="forms-inputs mb-4">
                    <span>Password</span>
                    <input
                      autocomplete="off"
                      type="password"
                      v-model="form4.password"
                    />
                    <div class="invalid-feedback">
                      Password must be 8 character!
                    </div>
                  </div>
                  <div class="mb-3">
                    <button type="submit" class="btn btn-dark w-100">
                      Login
                    </button>
                  </div>

                  <div class="mb-3">
                    <router-link
                      class="nav-link text-black"
                      :to="'/'"
                      aria-expanded="false"
                      style="
                        float: center;
                        color: black !important;
                        margin-top: 0em;
                        padding: 0rem 0.5rem;
                      "
                    >
                      <fai icon="sign-out-alt" aria-hidden="true"></fai
                      ><span
                        @click="passwordbutton()"
                        class="d-none d-sm-inline"
                        >Şifremi Unuttum</span
                      >
                    </router-link>
                  </div>
                </div>
                <div class="success-data" v-if="!validat.loader">
                  <h5 class="text-center">Başarıyla Giriş Yaptınız</h5>
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div v-else>
            <div class="card px-5 py-5" id="form1">
              <img
                src="@/assets/images/day.jpg"
                alt="Generic placeholder image"
                style="width: 10em; height: 10em"
                class="center"
              />
              <form action="#" @submit.stop.prevent="sendData2">
                <div class="form-data">
                  <div class="forms-inputs mb-4">
                    <span>Email</span>
                    <input
                      autocomplete="off"
                      type="text"
                      v-model="form5.email"
                    />
                    <div class="invalid-feedback">
                      A valid email is required!
                    </div>
                  </div>

                  <div class="mb-3">
                    <button type="submit" class="btn btn-dark w-100">
                      Kurtarma e-maili gönder
                    </button>
                  </div>
                </div>
              </form>

              <div class="mb-3">
                <router-link
                  class="nav-link text-black"
                  :to="'/'"
                  aria-expanded="false"
                  style="
                    float: center;
                    color: black !important;
                    margin-top: 0em;
                    padding: 0rem 0.5rem;
                  "
                >
                  <fai icon="sign-out-alt" aria-hidden="true"></fai
                  ><span @click="logbutton()" class="d-none d-sm-inline"
                    >Geri Dön</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let Loginvalue = ref(1);
import { ref } from "vue";
import { Login } from "@/store/user";
import { validat } from "@/store/user";
import { token } from "@/store/user";
import { updatepassword } from "@/store/content";


let form4 = ref({
  email: "",
  password: "",
});

let form5 = ref({
  email: "",
});

const sendData = () => {
  Login(form4);
};

const sendData2 = () => {
  updatepassword(form5)
};

const passwordbutton = () => {
  Loginvalue.value = 0;
  console.log("loginval", Loginvalue.value);
};
const logbutton = () => {
  Loginvalue.value = 1;
  console.log("loginval", Loginvalue.value);
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

input {
  width: 100%;
}

.card {
  border: none;
}

.forms-inputs {
  position: relative;
}

.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}

.forms-inputs input {
  height: 50px;
  border: 2px solid #eee;
}

.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}

.btn {
  height: 50px;
}

.success-data {
  display: flex;
  flex-direction: column;
}

.bxs-badge-check {
  font-size: 90px;
}
</style>