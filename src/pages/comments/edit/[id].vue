<template>
 <div class="wrapper px-4 mt-n10">
  <h3 class="mt-3 mb-3 page-title">Yorum Detay</h3>
  <div class="card mb-4">
   <div class="card-header">{{ singleComment.ID }} ID'li Yorum Gösterildi
    <router-link class="nav-link text-black" :to="'/comments/commentsTable'" aria-expanded="false"
     style="float: right;color: black !important;margin-top: 0em;padding: 0rem 0.5rem;">
     <fai icon="sign-out-alt" aria-hidden="true"></fai><span class="d-none d-sm-inline">Geri Dön</span>
    </router-link>
   </div>
   <div class="card-body">
     <form method="post" action="#" @submit.prevent="sendData">
            <div class="form-group">
              <label for="fname" class="control-label">İsim</label>
              <div class>
                <input disabled type="text" v-model="singleComment.firstName" class="form-control" id="fname" placeholder />
              </div>
            </div>         
            <div class="form-group">
              <label for="lname" class="control-label">Soyisim</label>
              <div class>
                <input disabled type="text" v-model="singleComment.lastName" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <label for="lname" class="control-label">Detay</label>
              <div class>
                <input type="text" v-model="singleComment.detail" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="form-group">
              <label for="lname" class="control-label">Aktiflik</label>
              <div class>
                <input type="text" v-model="singleComment.isActive" class="form-control" id="fname" placeholder />
              </div>
            </div>
            <div class="row border-top border-secondary mt-3">
              <div class="col-12">
                <div class="form-group">
                  <div class="p-t-20">
                    <button class="btn btn-success float-right mt-3" type="submit">Yorumu Güncelle</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
   </div>
  </div>
 </div>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue";
import { getSingleComment, singleComment, updateComments } from "@/store/content";
import { useRoute } from 'vue-router';

const route = useRoute()
onMounted(() => {
 getSingleComment( route.params.id ); 
})
let form6 = reactive({
  firstName: singleComment.firstName,
  lastName:  singleComment.lastName,
});

const sendData = () => {
  let detail = singleComment.detail
  let active = singleComment.isActive
   let ID = route.params.id;
   updateComments(ID, detail, active);
};
</script>