import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ShoppingLists from '@/views/ShoppingLists'
import ShoppingListView from '@/views/ShoppingListView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    /* eslint-disable */
  path: '/lists',
  name: 'lists',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: ShoppingLists
},
  {
    path: '/shoppingListMaker',
    name: 'shoppingList',
    component: ShoppingListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
