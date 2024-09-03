import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../pages/Home.vue'
import Modalidades from '../pages/Modalidades.vue'
import Galeria from '../pages/Galeria.vue'
import Contato from '../pages/Contato.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/modalidades', component: Modalidades },
    { path: '/galeria', component: Galeria },
    { path: '/contato', component: Contato },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
