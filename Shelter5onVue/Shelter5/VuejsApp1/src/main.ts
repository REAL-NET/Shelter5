import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from '@/store'
import router from '@/router/index';
import MyAuthentication from '@/components/pages/Authentication';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
////import VueDraggable from 'vue-draggable'

declare module 'vue/types/vue' {
    interface Vue {
        $eventBus: Vue
    }
}

export const eventBus = new Vue()

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


MyAuthentication.checkAuthentication();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store: store,
    router,
    render: h => h(App),
    
})