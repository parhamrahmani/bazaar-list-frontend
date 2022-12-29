import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductAddView from '@/views/ProductAddView'
import ShoppingLists from '@/views/ShoppingLists'
import SingleShoppingListView from '@/views/SingleShoppingListView'

const routes = [
  {
    path: '/',
    name: '',
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
    path: '/addProduct',
    name: 'productAdd',
    component: ProductAddView
  },
    {
      path: '/list/:listId',
      component: SingleShoppingListView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
