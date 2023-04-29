 <template>
  <!-- Giriş Chartları -->
  <div class="card mb-4">
    <div class="card-header">
      Grafik Verileri
      <button
        style="float: right; padding: 0rem 0.5rem; height: 25px"
        class="btn"
        @click="daybutton()"
      >
        Day
      </button>
      <button
        style="float: right; padding: 0rem 0.5rem; height: 25px"
        class="btn"
        @click="weekbutton()"
      >
        Week
      </button>
      <button
        style="float: right; padding: 0rem 0.5rem; height: 25px"
        class="btn"
        @click="monthbutton()"
      >
        Month
      </button>
      <button
        style="float: right; padding: 0rem 0.5rem; height: 25px"
        class="btn"
        @click="yearbutton()"
      >
        Year
      </button>
    </div>
    <div class="card-body">
      <div class="px-4 mt-n10">
        <section id="charts">
          <div>
            <div v-if="buttonvalue === 1">
              <BarChart
                :chart-data="dataday"
                :options="optionsday"
                css-classes="chart-container"
              />
            </div>
            <div v-else-if="buttonvalue === 2">
              <BarChart
                :chart-data="dataweek"
                :options="optionsweek"
                css-classes="chart-container"
              />
            </div>
            <div v-else-if="buttonvalue === 3">
              <BarChart
                :chart-data="datamonth"
                :options="optionsmonth"
                css-classes="chart-container"
              />
            </div>
            <div v-else>
              <BarChart
                :chart-data="datayear"
                :options="optionsyear"
                css-classes="chart-container"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <DoughnutChart
                  :chart-data="data1"
                  :options="options1"
                  css-classes="chart-container"
                />
              </div>
            </div>
            <div class="col">
              <div>
                <DoughnutChart
                  :chart-data="data3"
                  :options="options3"
                  css-classes="chart-container"
                />
              </div>
            </div>
            <div class="col">
              <div>
                <DoughnutChart
                  :chart-data="data4"
                  :options="options4"
                  css-classes="chart-container"
                />
              </div>
            </div>
          </div>
          <div>
            <LineChart
              :chart-data="data2"
              :options="options2"
              css-classes="chart-container"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script setup>


import {gunler,aylist , kisay } from "@/lib/setting"
import { onMounted } from "vue";
import { reactive, ref } from "vue";
let buttonvalue = ref(4);
import { BarChart, DoughnutChart, LineChart } from "vue-chart-3";
import {
  Chart,
  BarController,
  CategoryScale,
  BarElement,
  LinearScale,
  LineElement,
  LineController,
  PointElement,
  DoughnutController,
  ArcElement,
} from "chart.js";
Chart.register(
  DoughnutController,
  ArcElement,
  BarController,
  LinearScale,
  BarElement,
  LineElement,
  LineController,
  CategoryScale,
  PointElement
);
// import{dataday, dataValuesday , optionsday, datayear, dataValuesyear , optionsyear, datamonth, dataValuesmonth , optionsmonth, dataweek, dataValuesweek , optionsweek, data1, dataValues1 , options1, data2, dataValues2 , options2, data3, dataValues3 , options3, data4, dataValues4 , options4 } from "@/assets/FakeDatabase/plot";
const dataValuesday = ref([
  [1, 3, 5, 7, 2, 4, 6],
  [3, 15, 21, 13, 4, 9, 32],
]);

const dataday = {
  labels: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ],

  datasets: [
    {
      label: "Kullanıcılar",
      data: dataValuesday.value[0],
      backgroundColor: "#268bd2",
    },
    {
      label: "Günlük Ziyaret",
      data: dataValuesday.value[1],
      backgroundColor: "#2aa198",
    },
  ],
};

const optionsday = ref({
  plugins: {
    title: {
      text: "Kullanım Grafiği",
    },
  },
});

const dataValuesmonth = ref([
  [11, 32, 53, 74, 21, 42, 63, 53, 74, 21, 42, 63],
  [34, 15, 21, 13, 44, 91, 32, 21, 13, 44, 91, 32],
]);
const datamonth = {
  labels: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],

  datasets: [
    {
      label: "Kullanıcılar",
      data: dataValuesmonth.value[0],
      backgroundColor: "#268bd2",
    },
    {
      label: "Aylık Ziyaret",
      data: dataValuesmonth.value[1],
      backgroundColor: "#2aa198",
    },
  ],
};
const optionsmonth = ref({
  plugins: {
    title: {
      text: "Kullanım Grafiği",
    },
  },
});

const dataValuesyear = ref([
  [18, 33, 52, 74, 29, 41, 63],
  [33, 152, 211, 139, 412, 911, 329],
]);

const datayear = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],

  datasets: [
    {
      label: "Kullanıcılar",
      data: dataValuesyear.value[0],
      backgroundColor: "#268bd2",
    },
    {
      label: "Yıllık Ziyaret",
      data: dataValuesyear.value[1],
      backgroundColor: "#2aa198",
    },
  ],
};

const optionsyear = ref({
  plugins: {
    title: {
      text: "Kullanım Grafiği",
    },
  },
});

const dataValuesweek = ref([
  [11, 32, 53, 71, 23, 44, 62],
  [31, 153, 21, 13, 42, 91, 32],
]);

const dataweek = {
  labels: [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
  ],

  datasets: [
    {
      label: "Kullanıcılar",
      data: dataValuesweek.value[0],
      backgroundColor: "#268bd2",
    },
    {
      label: "Haftalık Ziyaret",
      data: dataValuesweek.value[1],
      backgroundColor: "#2aa198",
    },
  ],
};

const optionsweek = ref({
  plugins: {
    title: {
      text: "Kullanım Grafiği",
    },
  },
});

const dataValues1 = ref([45, 25, 15]);

const data1 = {
  labels: [
    "Toplam Haber Sayısı",
    "Yayındaki Haber Sayısı",
    "Onay Bekleyen Haber Sayısı",
  ],

  datasets: [
    {
      data: dataValues1.value,
      backgroundColor: ["#859900", "#d33682", "#cb4b16"],
    },
  ],
};

const options1 = ref({
  elements: {
    arc: {
      borderColor: "#073642",
    },
  },

  plugins: {
    title: {
      text: "Haber Verileri",
    },
  },
});

const dataValues3 = ref([95, 75, 45]);

const data3 = {
  labels: [
    "Toplam Yorum Sayısı",
    "Yayındaki Yorum Sayısı",
    "Onay Bekleyen Yorum Sayısı",
  ],

  datasets: [
    {
      data: dataValues3.value,
      backgroundColor: ["#859900", "#d33682", "#cb4b16"],
    },
  ],
};

const options3 = ref({
  elements: {
    arc: {
      borderColor: "#073642",
    },
  },

  plugins: {
    title: {
      text: "Yorum Verileri",
    },
  },
});

const dataValues4 = ref([125, 75, 15]);

const data4 = {
  labels: ["Toplam Kullanıcı Sayısı", "Aktif Kullanıcı Sayısı", "Admin Sayısı"],

  datasets: [
    {
      data: dataValues4.value,
      backgroundColor: ["#859900", "#d33682", "#cb4b16"],
    },
  ],
};

const options4 = ref({
  elements: {
    arc: {
      borderColor: "#073642",
    },
  },

  plugins: {
    title: {
      text: "Kullanıcı/Admin Verileri",
    },
  },
});

const dataValues2 = ref([
  123, 141, 166, 181, 119, 131, 153, 125, 146, 172, 191, 198, 201,
]);

const data2 = {
  labels: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],

  datasets: [
    {
      label: "Toplam Kullanıcılar (2021)",
      data: dataValues2.value,
      borderColor: "#dc322f",
    },
  ],
};

const options2 = ref({
  scales: {
    y: {
      beginAtZero: true,
    },
  },

  plugins: {
    title: {
      text: "Kullanıcı Verileri",
    },
  },
});



const daybutton = () => {
  buttonvalue.value = 1;
  console.log("daybutton", buttonvalue.value);
};
const weekbutton = () => {
  buttonvalue.value = 2;
  console.log("weekbutton", buttonvalue.value);
};
const monthbutton = () => {
  buttonvalue.value = 3;
  console.log("monthbutton", buttonvalue.value);
};
const yearbutton = () => {
  buttonvalue.value = 4;
  console.log("yearbutton", buttonvalue.value);
};
</script>