import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CreatePost from '../views/Createpost.vue'
import Profile from '../views/Profile.vue'
import PostDetail from '../views/Postdetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/create', component: CreatePost },
  { path: '/profile', component: Profile },
  { path: '/post/:id', component: PostDetail }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
