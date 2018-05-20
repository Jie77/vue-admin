import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/login'
import NotFound from '@/components/page/notFound'
import LayOut from '@/components/layout/layout'
import AddCourse from '@/components/page/addCourse'
import DelCourse from '@/components/page/delCourse'
import DownloadDoc from '@/components/page/downloadDoc'
import StuDoc from '@/components/page/stuDoc'

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
      component: LayOut,
      children: [
        {
          path: 'addcourse',
          name: 'addcourse',
          component: AddCourse
        },
        {
          path: 'delcourse',
          name: 'delcourse',
          component: DelCourse
        },
        {
          path: 'downloaddoc',
          name: 'downloaddoc',
          component: DownloadDoc
        },
        {
          path: 'studoc',
          name: 'studoc',
          component: StuDoc
        }
      ]
    },
    {
      path: '/*',
      name: '404',
      component: NotFound,
    }
  ]
})
