import Vue from 'vue'
import VueRouter from 'vue-router'
import Logon from '../views/Logon.vue'
import NewIncident from '../views/NewIncident.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Logon',
    component: Logon
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/incidents/new',
    name: 'NewIncident',
    component: NewIncident
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
