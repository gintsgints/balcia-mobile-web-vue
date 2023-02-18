// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },{
        path: 'auth/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue'),
      },{
        path: 'auth/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/auth/Register.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
