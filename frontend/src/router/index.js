import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pokemon from '../views/ViewPokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },{
    //Path that will let users look at more information about the pokemon.
    path: '/pokemon/:id',
    name: 'Pokemon',
    componet: Pokemon
  }
]

const router = new VueRouter({
  node: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router