import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory,createWebHashHistory  } from "vue-router";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import View from "./components/View.vue";

const routes = [
    {
        name:'HomePage',
        component : Home,
        path : '/'
    },
    {
        name:'SignUp',
        component : SignUp,
        path : '/sign-up'
    },
    {
        name:'Login',
        component : Login,
        path : '/login'

    },
    {
        name:'Add',
        component : Add,
        path : '/add'
    },
    {
        name:'Update',
        component : Update,
        path : '/update/:id'
    },
    {
        name:'View',
        component : View,
        path : '/view/:id'
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router
