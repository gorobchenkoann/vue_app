import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import CatalogPage from '../views/CatalogPage.vue'
import ProductPage from '../views/ProductPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/catalog',
    component: CatalogPage
  },
  {
    path: '/product/:id',
    component: ProductPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
