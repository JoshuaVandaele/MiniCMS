import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SelectionPage from '../views/SelectionPage.vue'
import SelectionTemplate from '../views/SelectionTemplate.vue'
import TemplateViewer from '../views/TemplateViewer.vue'
import CreatePage from '../views/CreatePage.vue'
import PageEditor from '../views/PageEditor.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/selection-page',
      name: 'selectionPage',
      component: SelectionPage
    },
    {
      path: '/selection-template',
      name: 'selectionTemplate',
      component: SelectionTemplate
    },
    {
      path: '/template-viewer/:id',
      name: 'template-viewer',
      component: TemplateViewer
    },
    {
      path: '/create-page/:templateID',
      name: 'create-page',
      component: CreatePage
    },
    {
      path: '/page-editor/:pageID',
      name: 'page-editor',
      component: PageEditor
    }
  ]
})

export default router
