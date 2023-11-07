import { createRouter, createWebHistory } from 'vue-router'
import TemplateViewer from '../views/TemplateViewer.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'template-viewer',
      component: TemplateViewer
    },
  ]
})

export default router
