<template>
  <div class="wrapper px-4 mt-n10">
    <h3 class="mb-3 mt-3 page-title">Kullanıcılar</h3>
    <div class="card mb-4">
      <div class="card-header">Kullanıcı Tablosu</div>
      <div class="card-body">
        <div class="fixed-columns">
          <div class="table-container px-4 mt-n10 table-responsive">
            <table class="table table-striped table-bordered align-middle text-center">
              <thead>
                <tr>
                  <th>ID <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>İsim <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Soyisim <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Kullanıcı Adı <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Mail <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Yetki <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Aktiflik <fai icon="sort" aria-hidden="true"></fai>
                  </th>
                  <th>Düzenle</th>
                  <th>Yasakla</th>
                  <th>Detay</th>
                </tr>
              </thead>
              <tbody id="paginate">
                <tr v-for="user in userList.list" :key="user.ID">
                  <td>{{ user.ID }}</td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.permissions }}</td>
                  <td>{{ user.isActive}}</td>
                  <td><button class="btn card-1 btn-md">Güncelle</button></td>
                  <td><button @click="DeleteUser(user.ID)" class="btn btn-danger btn-md">Yasakla</button></td>
                  <td><router-link class="btn button allign-middle card-1 btn-md" :to="`/user/${user.ID}`" tag="button">Detay</router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-header"></div>
      <div class="card-body">
        <div class="fixed-columns">
          <div class="table-container px-4 mt-n10 table-responsive">
            <table class="table table-striped table-bordered text-center">
              <thead>
                <tr>
                  <th>Toplam Kullanıcı Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{userList.list.length}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userList, getUsers, deleteUser } from '@/store/content';
import { onMounted ,onUpdated, ref } from 'vue';
import { TableSort,Paginate } from '@/lib/setting';
import router from '@/router';

onMounted(() => {
  // // comments
  getUsers();
  TableSort(); 
});

//  onUpdated(() => {
//   if(userList.list.length > 0){
//       new Paginate("paginate","tr",10);
//   }
// });

function DeleteUser(id) {
  let userID = ref(id)
  console.log("UserID: ", userID)
  Swal.fire({
    title: "Emin misiniz?",
    text: "Bu işlemi geri alamayacaksınız !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Evet!",
  })
    .then((result) => {
      if (result.isConfirmed) {
        deleteUser(userID.value);
        Swal.fire("Başarılı!", "", "success");
        setTimeout(() => router.go(0), 1000);
        Swal.fire("Sayfa Yenileniyor!", "", "success");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

</script>

<style>
.float-right{
  float:right;
}

.page-buttons-container{

display:contents !important;
}

.page-button {
    padding: 2px 8px !important;
    border-radius: 50% !important;
    background-color: #257ab5 !important;
    color: white !important;
    margin: 5px 5px;
}

.active{
  border: 2px solid  #353634 !important;
}

</style>
 