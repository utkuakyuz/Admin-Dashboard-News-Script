<template>
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
</template>

<script setup>
import { BarChart } from "vue-chart-3";
import { reactive, ref } from "vue";
import {
  Chart,
  BarController,
  CategoryScale,
  BarElement,
  LinearScale,
  LineElement,
  LineController,
  PointElement,
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
</script>