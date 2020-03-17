import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import MyAuthentication from '@/components/pages/Authentication';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
////import VueDraggable from 'vue-draggable'

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
//Vue.use(VueDraggable);


MyAuthentication.checkAuthentication();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})