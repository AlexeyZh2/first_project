import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutVew from '../views/AboutView.vue'
import ContactsVew from '../views/ContactsVew.vue'
import ConseptView from '../views/ConseptView.vue'
import ImplementationVew from '../views/ImplementationVew.vue'
import ProjectVew from '../views/ProjectVew.vue'
import Project1Vew from '../views/Project1Vew.vue'
import Project2Vew from '../views/Project2Vew.vue'
import ConsultingVew from '../views/ConsultingVew.vue'
import Consulting1Vew from '../views/Consulting1Vew.vue'
import EconomicVew  from '../views/EconomicVew.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about_us',
    name: 'about',
    component: AboutVew
  },
  {
    path: '/implementation',
    name: 'implementation',
    component: ImplementationVew
  },
  {
    path: '/consulting',
    name: 'consulting',
    component: ConsultingVew
  },
  {
    path: '/consulting1',
    name: 'consulting1',
    component: Consulting1Vew
  },
  {
    path: '/economic_efficiency',
    name: 'economic_efficiency',
    component: EconomicVew
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectVew
  },
  {
    path: '/project1',
    name: 'project1',
    component: Project1Vew
  },
  {
    path: '/project2',
    name: 'project2',
    component: Project2Vew
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsVew
  },
  {
    path: '/consept',
    name: 'consept',
    component: ConseptView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
