import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
//import VueCookie from 'vue-cookie';
import Vuetify from 'vuetify';
import Authentication from '@/components/pages/Authentication';
//import('../node_modules/vuetify/dist/vuetify.min.css');
//Vue.use(VueCookie)
//Vue.use(Vuetify)
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
//Vue.use(Vuetify);

Authentication.checkAuthentication();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})