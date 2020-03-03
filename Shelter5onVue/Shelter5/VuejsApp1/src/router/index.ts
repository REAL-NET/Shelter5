import Vue from "vue";
import Router from "vue-router";
import * as Auth from "@/components/pages/Authentication/index";
//pages
import Home from "@/components/pages/Home/Home.vue";
import Registration from "@/components/pages/Authentication/Registration.vue";
import MyAuthentication from "@/components/pages/Authentication/Authentication.vue";

// Global components
//import Header from "@/components/pages/Header/Header.vue";
//import List from "@/components/List/List";

// Register components
//Vue.component("app-header", Header);

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            components: {
                default: Home,
                //header: Header,
            },
            // meta: {
            //   requiredAuth: true
            // }
        }, {
            path: "/login",
            name: "MyAuthentication",
            component: MyAuthentication,
        }, {
            path: "/registr",
            name: "Registration",
            component: Registration,
        }

    ]
});

// redirect ro login page if not authenticated
//router.beforeEach((to, from, next) => {
//    if (to.path !== '/login') {
//        if (Auth.default.user.authenticated) {
//            next()
//        } else {
//            router.push('/login')
//        }
//    } else {
//        next()
//    }
//})

export default router;
