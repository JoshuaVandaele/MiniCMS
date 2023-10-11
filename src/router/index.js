import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Selection from '../views/Selection.vue'
import SelectionTemplate from '../views/SelectionTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/selection',
      name: 'selection',
      component: Selection
    },
    {
      path: '/selection-template',
      name: 'selectionTemplate',
      component: SelectionTemplate
    }
  ]
})

export default router
