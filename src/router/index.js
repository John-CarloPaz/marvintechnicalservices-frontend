import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import about_view from '@/views/about_view.vue'
import RecruitmentPage from '@/views/RecruitmentPage.vue'
import SubmitImageForm from '../layouts/SubmitImageForm.vue'
import ShowImageByCategory from '../layouts/ShowImageByCategory.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    { path: '/services', name: 'Services', component: HomePage },
    {
      path: '/admin/login',
      name: 'admin',
      component: LoginPage,
    },
    {
      path: '/admin/upload',
      name: 'admin-upload', 
      component: SubmitImageForm, 
      meta: { requiresAuth: true }
    },
    {
      path: '/images/:imageCategory',
      name: 'categorized-images', 
      component: ShowImageByCategory, 
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: about_view
    }, 
    {
      path: '/recruitement',
      name: 'recruitment',
      component: RecruitmentPage
    }
  ],
    scrollBehavior (to, from, savedPosition) {
    if (to.name === 'home') {
      return { x: 0, y: 0 }
    }
  },
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = sessionStorage.getItem('authToken');
    console.log(token);
    if (token) {
      next();
    } else {
      next({name: 'admin'});
    }
  } else {
    next();
  }
});
export default router
