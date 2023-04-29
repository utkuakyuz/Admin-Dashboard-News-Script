<template>
  <!-- <p>Edit User</p> -->
  <div class="wrapper px-4 mt-n10">
    <h3 class="mb-3 mt-3 page-title">Kullanıcıyı Düzenle</h3>
    <div class="card mb-4">
      <div class="card-header"> ID numaralı kullanıcıyı düzenle
        <router-link class="nav-link text-black" :to="`/user/${route.params.id}`" aria-expanded="false" style="
              float: right;
              color: black !important;
              margin-top: 0em;
              padding: 0rem 0.5rem;
            ">
          <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
        </router-link>
      </div>
      <div class="card-body">
        <div class="fixed-columns">

          <form method="post" action="#" @submit.prevent="sendData">
            <div class="form-group">
              <label for="fname" class="control-label">İsim</label>
              <div class>
                <input type="text" v-model="singleUserd.firstName" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <label for="fname" class="control-label">Tags</label>
              <div class>
                <input type="text" v-model="singleUserd.tags" class="form-control" id="fname" placeholder />
              </div>
            </div>            
            <div class="form-group">
              <label for="lname" class="control-label">Soyisim</label>
              <div class>
                <input type="text" v-model="singleUserd.lastName" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Mail Adresi</label>
              <div class>
                <input type="text" v-model="singleUserd.email" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">İzinler</label>
              <div class>
                <input type="text" v-model="singleUserd.permissions" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="row border-top border-secondary mt-3">
              <div class="col-12">
                <div class="form-group">
                  <div class="p-t-20">
                    <button class="btn btn-success float-right mt-3" type="submit">Kullanıcıyı Güncelle</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import { getSingleUser, singleUser, updateUser, singleUserd } from "@/store/content";
import { useRoute } from 'vue-router';
const route = useRoute()
 getSingleUser(route.params.id);
onMounted(() => {
 
})

let form6 = reactive({
  firstName: singleUserd.firstName,
  lastName:  singleUserd.lastName,
  email: singleUser.email,
  permissions: singleUserd.permissions,
  tags: singleUserd.tags
});

const sendData = () => {
  let permss = singleUserd.permissions
  let fname = singleUserd.firstName
  let lastName = singleUserd.lastName
  let email = singleUserd.email
  let tagg = singleUserd.tags
  // console.log("Form6::", form6.firstName);
   let ID = route.params.id;
   console.log("en baştıan ID", ID)
  //  updateUser(ID, {permissions: form6.permissions },{firstName: form6.firstName },{lastName: form6.lastName },{email: form6.email });
      updateUser(ID, permss, fname, lastName, tagg, email);
};
</script>