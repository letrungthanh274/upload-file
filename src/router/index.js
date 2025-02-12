import { createWebHistory,createRouter } from "vue-router";
import Home from'@/components/comHome.vue'
 import CaPhe from '@/components/comCaPhe.vue'
 import TraSua from '@/components/comTraSua.vue'
 import ProductDetail from '@/components/comProductDetail.vue'
 import Cart from '@/components/comCart.vue'
 import LienHe from '@/components/comLienHe.vue'
 import Login from '@/components/comLogin.vue'
 import ComRegister from '../components/comRegister.vue';

 const routes=[

    {
        path:"/",
        name:"Home",
        component: Home

    },
    {
        path:"/CaPhe",
        name:"Caphe",
        component: CaPhe

    },
    {
        path:"/TraSua",
        name:"TraSua",
        component: TraSua

    },
    {
        path:"/LienHe",
        name:"LienHe",
        component: LienHe

    },
    {
        path:"/ProductDetail:id",
        name:"ProductDetail",
        component: ProductDetail

    },
    {
        path:"/Cart",
        name:"Cart",
        component: Cart

    },
    {
        path:"/Login",
        name:"Login",
        component: Login

    },
    {
        path: '/register',
        name: 'Register',
        component: ComRegister,
      },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router