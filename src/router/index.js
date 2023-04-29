import { createRouter, createWebHistory, } from "vue-router";
import routes from "virtual:generated-pages";

console.log('routes:', routes)
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router