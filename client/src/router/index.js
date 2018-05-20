import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/login'
import NotFound from '@/components/page/notFound'
import LayOut from '@/components/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: LayOut
    },
    {
      path: '/*',
      name: '404',
      component: NotFound,
    }
  ]
})
