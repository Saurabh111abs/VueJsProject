import HomeVue from "./components/HomeVue.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter , createWebHistory} from 'vue-router'
import LogIn from "./components/LogIn.vue";
import AddVue from "./components/AddVue.vue";
import UpdateVue from "./components/UpdateVue.vue";
const routes= [
    {
        name:'HomeVue',
        component:HomeVue,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },

    {
        name:'LogIn',
        component:LogIn,
        path:'/login'
    },

    {
        name:'AddVue',
        component:AddVue,
        path:'/add'
    },

    {
        name:'UpdateVue',
        component:UpdateVue,
        path:'/update'
    },

]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router