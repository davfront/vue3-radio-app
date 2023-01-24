import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import CategoryView from '@/views/CategoryView.vue'
import FavouritesView from '@/views/FavouritesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
      children: [
        {
          path: ':tag',
          name: 'category',
          component: CategoryView,
          props: (route) => ({
            categoryName: route.params.tag,
            limit: route.query.limit || undefined
          })
        }
      ]
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView
    }
  ],
  linkActiveClass: 'is-active'
})

export default router
