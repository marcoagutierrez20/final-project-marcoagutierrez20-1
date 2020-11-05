import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Library from '../views/Library.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Library',
    name: 'Library',
    component: Library
  },{
    //Path that will let users look at more information about the pokemon.
    path: '/Pokemon/:id',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "bundle" */ '../views/ViewPokemon.vue')
  }
]

const router = new VueRouter({
  node: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router