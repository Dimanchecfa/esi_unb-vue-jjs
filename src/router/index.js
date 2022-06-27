import {createRouter , createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddSecretaire from '../views/AddSecretaire.vue'
import AddStudent from '../views/AddStudent.vue'
import ListeS from '../views/ListeS.vue'
import ListeE from '../views/ListeE.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        
    },
    {
        path:'/addSecretaire',
        name: 'AddSecretaire',
        component: AddSecretaire,
      
    },
    {
        path:'/addStudent',
        name: 'AddStudent',
        component: AddStudent,
      
    },
    {
        path:'/secretaire',
        name: 'ListeS',
        component: ListeS,
      
    },
    {
        path:'/etudiants',
        name: 'ListeE',
        component: ListeE,
        data: {
            message: []
        }
      
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;