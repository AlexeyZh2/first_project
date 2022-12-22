import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutVew from '../views/AboutView.vue'
import ContactsVew from '../views/ContactsVew.vue'
import ContestsView from '../views/ContestsView.vue'
import AboutProjectVew from '../views/AboutProjectVew.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutVew
  },
  {
    path: '/aboutproject',
    name: 'aboutproject',
    component: AboutProjectVew
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsVew
  },
  {
    path: '/contests',
    name: 'contests',
    component: ContestsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
