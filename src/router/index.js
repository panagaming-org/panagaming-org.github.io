import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import DonationsView from '../views/DonationsView.vue'
import BacktrackView from '../views/BacktrackView.vue'

const router = createRouter({
  history: createWebHashHistory(), 
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
        path: '/actividades',
        component: ActivitiesView
    },
    {
        path: '/donaciones',
        component: DonationsView
    },
    {
        path: '/the-backtrack-knights',
        component: BacktrackView
    }
  ]
})

export default router