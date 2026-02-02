import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../stores/auth'

import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CreatePost from '../views/Createpost.vue'
import Profile from '../views/Profile.vue'
import PostDetail from '../views/Postdetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/category/:name', component: Category },
  { path: '/post/:id', component: PostDetail },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/create',
    component: CreatePost,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.user) {
    return '/login'
  }
})

export default router

