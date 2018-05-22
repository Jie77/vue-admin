import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/layout/layout'
import Login from '@/page/login'
import Register from '@/page/register'
import NotFound from '@/page/notFound'
import AddCourse from '@/page/stu/addCourse'
import DelCourse from '@/page/stu/delCourse'
import DownloadDoc from '@/page/stu/downloadDoc'
import StuDoc from '@/page/stu/stuDoc'
import adminAddCourse from '@/page/admin/addCourse'
import adminDelCourse from '@/page/admin/delCourse'
import adminDownloadDoc from '@/page/admin/downloadDoc'
import adminAddStu from '@/page/admin/addstu'


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
      path: '/register',
      name: 'register',
      component: Register
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
        },
        {
          path: 'adminaddcourse',
          name: 'adminaddcourse',
          component: adminAddCourse
        },
        {
          path: 'admindelcourse',
          name: 'admindelcourse',
          component: adminDelCourse
        },
        {
          path: 'admindownloaddoc',
          name: 'admindownloaddoc',
          component: adminDownloadDoc
        },
        {
          path: 'adminaddstu',
          name: 'adminaddstu',
          component: adminAddStu
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
