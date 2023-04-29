<template>

    <div class="wrapper px-4 mt-n10">
    <h3 class="page-title mb-3 mt-3">Profil Ayarları</h3>
    <div class="card mb-4">
      <div class="card-header">Profili Düzenle
          <router-link
          class="nav-link text-black"
          :to="'/user/aindex'"
          aria-expanded="false"
          style=" float: right; color: black !important; margin-top: 0em; padding: 0rem 0.5rem;"
        >
          <fai icon="sign-out-alt" aria-hidden="true"></fai
          ><span class=" d-none d-sm-inline">Geri Dön</span>
        </router-link>
      </div>
      <div class="card-body">
        <div class="px-4 mt-n10">
         
        <div class="row">
          <div class="col-md-3 ">
            <div class="d-flex flex-column align-items-center text-center ">
              <img class="rounded-circle mt-5" width="150px" src="@/assets/images/person-icon.png" />
              <span class="font-weight-bold">Mehmet Ali Birand</span>
              <span class="text-black-50">mehmetalibirand@gmail.com</span>
              <span>YAZAR/USTA</span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profil Ayarları</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">İsim</label>
                  <input type="text" class="form-control" placeholder="İsim" value />
                </div>
                <div class="col-md-6">
                  <label class="labels">Soyisim</label>
                  <input type="text" class="form-control" value placeholder="Soyisim" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Telefon Numarası</label>
                  <input type="text" class="form-control" placeholder="Telefon Numarası" value />
                </div>
                <div class="col-md-12">
                  <label class="labels">E-Posta Adresi</label>
                  <input type="text" class="form-control" placeholder="E-Posta Adresi" value />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Ülke</label>
                  <input type="text" class="form-control" placeholder="Ülke" value />
                </div>
                <div class="col-md-6">
                  <label class="labels">Şehir</label>
                  <input type="text" class="form-control" value placeholder="Şehir" />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">Profili Kaydet</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>İlgi Alanlarını Düzenle</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;İlgi Alanları
                </span>
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Yazarlık Tecrübesi</label>
                <input type="text" class="form-control" placeholder="Yazarlık Tecrübesi" value />
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Ek Bilgiler</label>
                <input type="text" class="form-control" placeholder="Ek Bilgiler" value />
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
              </div>
    </div>

</template>