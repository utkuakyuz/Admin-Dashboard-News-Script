<template>
    <h2>Test</h2>
</template>
<script setup>
import {services} from '@/service/restServices'

const getData = ()=>{
    services.web({a:1,b:2})
    .then((result) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
}

</script>
