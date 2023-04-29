<template>
  <div class="wrapper px-4 mt-n10">
    <h3 class="page-title mb-3 mt-3">Haber Ekle</h3>
    <div class="card mb-4">
      <div class="card-header">Haber Ekleme Formu</div>
      <div class="card-body">
        <div class="px-4 mt-n10">
          <form method="post" action="#" @submit.prevent="sendData" enctype="multipart/form-data">
            <div class="form-group">
              <label class="control-label">Haberin Başlığı</label>
              <div class>
                <input type="text" v-model="form[0].title" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Haberin Yazarı</label>
              <div class>
                <input type="text" v-model="form.authorID" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Haberin Türü</label>
              <div class>
                <input type="text" v-model="form.typeID" class="form-control" />
              </div>
            </div>
            <select class="form-group form-select" v-model="form[0].categoryID">
              <option selected>Kategori Seçiniz...</option>
              <option value="1">Dünya</option>
              <option value="2">Siyaset</option>
              <option value="3">Futbol</option>
            </select>
            <div class="form-group">
              <label class="control-label">Haberin Tarihi</label>
              <div class>
                <input type="text" class="form-control" />
              </div>
            </div>

            <input class="form-control" id="formFile" type="file" @change="onFileChange"
              style="margin-bottom: 25px; margin-top: 25px" />
            <label class="control-label">Haberin İçeriği</label>
            <textarea class="form-group form-control" rows="4" v-model="form[0].summary"></textarea>
            <input class="btn btn-primary" type="submit" value="Paylaş" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { adminAddNews } from "@/store/content";
/*categoryID, typeID, title, image, summary, authorID*/
let form = ref([
  { categoryID: "1", typeID: 1, title: "", summary: "", authorID: 2 },
  { detail: "", video: null, image: null, videodetail: "" },
]);
</script>

<style>
.form-group {
  margin-bottom: 25px;
}
</style>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    onFileChange(e) {
      this.createImage(e.target.files[0]);

      console.log(this.form);
    },
    sendData() {
      adminAddNews(this.form);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
        this.form[1].image = vm.image;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
