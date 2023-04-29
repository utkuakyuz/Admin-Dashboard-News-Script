<template>
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
</template>

<script setup>
// import { ref } from "vue";
// let buttonvalue = ref(4);
// const daybutton = () => {
//   buttonvalue.value = 1;
//   console.log("daybutton", buttonvalue.value);
// };
// const weekbutton = () => {
//   buttonvalue.value = 2;
//   console.log("weekbutton", buttonvalue.value);
// };
// const monthbutton = () => {
//   buttonvalue.value = 3;
//   console.log("monthbutton", buttonvalue.value);
// };
// const yearbutton = () => {
//   buttonvalue.value = 4;
//   console.log("yearbutton", buttonvalue.value);
// };
</script>