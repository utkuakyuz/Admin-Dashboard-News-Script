<template>
  <div class="wrapper px-4 mt-n10">
    <h3 class="page-title mb-3 mt-3">Yönetici Ekle</h3>
    <div class="card mb-4">
      <div class="card-header">Yönetici Ekleme Formu</div>
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
            <!-- Permission Tags -->
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.allUsers" type="checkbox" id="inlineCheckbox1"
                      value="1" />
                    <label class="form-check-label" for="inlineCheckbox1">allUsers</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.singleUser" type="checkbox" id="inlineCheckbox2"
                      value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">singleUser</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.addUser" type="checkbox" id="inlineCheckbox3"
                      value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">addUser</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.updateUser" type="checkbox" id="inlineCheckbox1"
                      value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">updateUser</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.deleteUser" type="checkbox" id="inlineCheckbox2"
                      value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">deleteUser</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.allComments" type="checkbox" id="inlineCheckbox3"
                      value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">allComments</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.singleComment" type="checkbox" id="inlineCheckbox1"
                      value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">singleComment</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.addComment" type="checkbox" id="inlineCheckbox2"
                      value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">addComment</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.deleteComment" type="checkbox" id="inlineCheckbox3"
                      value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">deleteComment</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.updateComment" type="checkbox" id="inlineCheckbox1"
                      value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">updateComment</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.confirmComments" type="checkbox" id="inlineCheckbox2"
                      value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">confirmComments</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.allNews" type="checkbox" id="inlineCheckbox3"
                      value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">allNews</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.singleNews" type="checkbox" id="inlineCheckbox1"
                      value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">singleNews</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.addNews" type="checkbox" id="inlineCheckbox2"
                      value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">addNews</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.updateNews" type="checkbox" id="inlineCheckbox3"
                      value="option3" />
                    <label class="form-check-label" for="inlineCheckbox3">updateNews</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.deleteNews" type="checkbox" id="inlineCheckbox1"
                      value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">deleteNews</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="form5.confirmNews" type="checkbox" id="inlineCheckbox2"
                      value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">confirmNews
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check form-check-inline"></div>
                </div>
              </div>
            </div>
            <div class="row border-top border-secondary">
              <div class="col-12">
                <div class="form-group">
                  <div class="p-t-20">
                    <button class="btn btn-success float-right" type="submit">
                      Kullanıcı Ekle
                    </button>
                  </div>
                </div>
              </div>
            </div>

 <div class="col">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"  type="checkbox" id="inlineCheckbox2"
                      value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">

                      <p>{{permissionsList.list["permObject"]}}</p>

                   
                    </label>
                  </div>
                </div>

         
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive, onMounted } from "vue";
import { Registeradmin } from "@/store/user";
import { binaryyadmin } from "@/lib/setting";
import { getPermissions, permissionsList } from "@/store/content";
// onMounted(() => {
//       getPermissions();
//   });
getPermissions();
// data.permObject["Add Admin"]




let form5 = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  allUsers: false,
  singleUser: false,
  addUser: false,
  updateUser: false,
  deleteUser: false,
  allComments: false,
  singleComment: false,
  addComment: false,
  deleteComment: false,
  updateComment: false,
  confirmComments: false,
  allNews: false,
  singleNews: false,
  addNews: false,
  updateNews: false,
  deleteNews: false,
  confirmNews: false,
  
});



const sendData = () => {
  Registeradmin({
    firstName: form5.firstName,
    lastName: form5.lastName,
    email: form5.email,
    password: form5.password,
    permissions: binaryyadmin(
      Number(form5.allUsers),
      Number(form5.singleUser),
      Number(form5.addUser),
      Number(form5.updateUser),
      Number(form5.deleteUser),
      Number(form5.allComments),
      Number(form5.singleComment),
      Number(form5.addComment),
      Number(form5.deleteComment),
      Number(form5.updateComment),
      Number(form5.confirmComments),
      Number(form5.allNews),
      Number(form5.singleNews),
      Number(form5.addNews),
      Number(form5.updateNews),
      Number(form5.deleteNews),
      Number(form5.confirmNews)
    ),
  });
};
</script>