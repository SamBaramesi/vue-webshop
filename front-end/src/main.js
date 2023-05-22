import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import * as VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWqmEu8_Td0pPc95N2XdXzq-VpD4ljM3E",
  authDomain: "vue-site-69e30.firebaseapp.com",
  projectId: "vue-site-69e30",
  storageBucket: "vue-site-69e30.appspot.com",
  messagingSenderId: "81093926389",
  appId: "1:81093926389:web:e0aeb4ab3159daae3e54bc"
};

initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: ShoppingCartPage,
    }, {
        path: '/products',
        component: ProductsPage
    }, {
        path: '/products/:productId',
        component: ProductDetailPage
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }]
}))
.mount('#app')