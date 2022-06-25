import {createRouter , createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Team from '../views/Team.vue'


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path:'/team',
        name: 'Team',
        component: Team
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;