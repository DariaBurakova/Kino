import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../components/MainPage.vue'
import FilmPage from '../components/FilmPage.vue'
import PersonPage from '../components/PersonPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/films/:route',
    name: 'filmPage',
    component: FilmPage
  },
  {
    path: '/person',
    name: 'PersonPage',
    component: PersonPage
  },
  {
    path: '/person/:route',
    name: 'PersonPage',
    component: PersonPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
