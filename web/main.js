import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import AboutView from './views/AboutView.vue';
import MainView from './views/MainView.vue';
import FormView from './views/FormView.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/about', component: AboutView },
        { path: '/form', component: FormView },
        { path: '*', component: MainView }
    ]
});

new Vue({
    router,
    el: '#app',
});
