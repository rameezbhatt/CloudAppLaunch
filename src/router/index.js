import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/AuthView.vue';
import TermsView from '../views/TermsView.vue';
import OnboardView from '../views/OnboardView.vue';
import LoadingScreenView from '../views/LoadingScreenView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView
    },
    {
      path: '/onboard',
      name: 'onboard',
      component: OnboardView
    },
    {
      path: '/loading-screen',
      name: 'LoadingScreenView',
      component: LoadingScreenView
    },
    /* {
      path: '/onboard',
      name: 'onboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthView.vue')
    } */
  ]
})

export default router

