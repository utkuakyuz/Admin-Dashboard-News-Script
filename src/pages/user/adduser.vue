<template>
 <div class="wrapper px-4 mt-n10">
  <h3 class="page-title mb-3 mt-3">Kullanıcı Ekle</h3>
  <div class="card mb-4">
   <div class="card-header">Kullanıcı Formu</div>
   <div class="card-body">
    <div class="px-4 mt-n10">
     <form method="post" action="#" @submit.prevent="sendData">
      <div class="form-group">
       <label for="fname" class="control-label">İsim</label>
       <div class>
        <input type="text" v-model="form5.firstName" class="form-control" id="fname" placeholder />
       </div>
      </div>
      <div class="form-group">
       <label for="lname" class="control-label">Soyisim</label>
       <div class>
        <input type="text" v-model="form5.lastName" class="form-control" id="fname" placeholder />
       </div>
      </div>
      <div class="form-group">
       <label class="control-label">Mail Adresi</label>
       <div class>
        <input type="text" v-model="form5.email" class="form-control" id="fname" placeholder />
       </div>
      </div>
      <div class="form-group">
       <label class="control-label">Şifre</label>
       <div class>
        <input type="text" v-model="form5.password" class="form-control" />
       </div>
      </div>
      <div class="form-group">
       <label class="control-label">Yetkiler</label>
      </div>
      <div class="form-group">
       <div class="row">
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.addNews" type="checkbox" value="option1" />
          <label class="form-check-label" for="inlineCheckbox1">addNews</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.addComment" type="checkbox" value="option2" />
          <label class="form-check-label" for="inlineCheckbox2">addComment</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.deleteComment" type="checkbox" value="option3" />
          <label class="form-check-label">deleteComment</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.updateNews" type="checkbox" value="option1" />
          <label class="form-check-label" for="inlineCheckbox1">updateNews</label>
         </div>
        </div>

        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.userFeedback" type="checkbox" value="option2" />
          <label class="form-check-label" for="inlineCheckbox2">userFeedback</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.updateUser" type="checkbox" value="option3" />
          <label class="form-check-label" for="inlineCheckbox3">updateUser</label>
         </div>
        </div>

       </div>
      </div>

      <div class="form-group">
       <div class="row">
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.allNews" type="checkbox" value="option1" />
          <label class="form-check-label" for="inlineCheckbox1">allNews</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.singleNews" type="checkbox" value="option2" />
          <label class="form-check-label" for="inlineCheckbox2">singleNews</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.updateComment" type="checkbox" value="option3" />
          <label class="form-check-label" for="inlineCheckbox3">updateComment</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.deleteNews" type="checkbox" value="option1" />
          <label class="form-check-label" for="inlineCheckbox1">deleteNews</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option2" />
          <label class="form-check-label" for="inlineCheckbox2">singleComment</label>
         </div>
        </div>
        <div class="col">
         <div class="form-check form-check-inline">
          <input class="form-check-input" v-model="form5.allComments" type="checkbox" value="option3" />
          <label class="form-check-label" for="inlineCheckbox3">allComments</label>
         </div>
        </div>
       </div>
      </div>
      <div class="row border-top border-secondary mt-3">
       <div class="col-12">
        <div class="form-group">
         <div class="p-t-20">
          <button class="btn btn-success float-right mt-3" type="submit">Kullanıcı
           Ekle</button>
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
import { reactive } from "vue";
import { Register } from "@/store/user";
import { binaryyuser } from "@/lib/setting";

let form5 = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  allComments: false,
  singleComment: false,
  addComment: false,
  deleteComment: false,
  updateComment: false,
  allNews: false,
  singleNews: false,
  addNews: false,
  updateNews: false,
  deleteNews: false,
  updateUser: false,
  userFeedback: false
});

const sendData = () => {
    Register({firstName: form5.firstName,lastName: form5.lastName,email: form5.email,password: form5.password,permissions: binaryyuser((Number(form5.allComments)),(Number(form5.singleComment)),(Number(form5.addComment)),(Number(form5.deleteComment)),(Number(form5.updateComment)),(Number(form5.allNews)),(Number(form5.singleNews)),(Number(form5.addNews)),(Number(form5.updateNews)),(Number(form5.deleteNews)),(Number(form5.updateUser)),(Number(form5.userFeedback)))});
   
};
</script>