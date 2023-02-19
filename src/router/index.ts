// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from "@/store/authStore"

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
        path: 'me',
        name: 'Me',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "me" */ '@/views/Me.vue'),
      },{
        path: 'auth/login',
        name: 'Login',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue'),
      },{
        path: 'auth/register',
        name: 'Register',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "register" */ '@/views/auth/Register.vue'),
      },{
        path: 'auth/pin',
        name: 'ShowPin',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "register" */ '@/views/auth/ShowPin.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  const { isLoggedIn } = storeToRefs(authStore)
  if (to.meta.requiresAuth && !isLoggedIn.value) {
    return {
      path: '/auth/login',
      query: { redirect: to.fullPath },
    }
  }
})

export default router
