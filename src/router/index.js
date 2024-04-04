import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Button from '@/views/Button.vue'
import Typography from '@/views/Typography.vue'
import Checkbox from '@/views/Checkbox.vue'
import Radiobutton from '@/views/Radiobutton.vue'
import Progress from '@/views/Progress.vue'
import Input from '@/views/Input.vue'
import Tabs from '@/views/tabs.vue'
import Table from '@/views/table.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/radiobutton',
      name: 'Radiobutton',
      component: Radiobutton
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})

export default router
