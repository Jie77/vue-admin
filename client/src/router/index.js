import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/layout/layout'
import Login from '@/page/login'
import Register from '@/page/register'
import NotFound from '@/page/notFound'
import SelectCourse from '@/page/stu/selectCourse'
import DelCourse from '@/page/stu/delCourse'
import DownloadDoc from '@/page/stu/downloadDoc'
import StuDoc from '@/page/stu/stuDoc'
import adminAddCourse from '@/page/admin/addCourse'
import adminDelCourse from '@/page/admin/delCourse'
import adminDownloadDoc from '@/page/admin/downloadDoc'
import adminAddStu from '@/page/admin/addstu'
import adminAssignCourse from '@/page/admin/assignCourse.vue'

Vue.use(Router)

const router = new Router({
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
      meta: { 
        auth: true
      },
      children: [
        {
          path: 'selectcourse',
          name: 'selectcourse',
          component: SelectCourse,
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'delcourse',
          name: 'delcourse',
          component: DelCourse,
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'downloaddoc',
          name: 'downloaddoc',
          component: DownloadDoc,
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'studoc',
          name: 'studoc',
          component: StuDoc,
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'adminaddcourse',
          name: 'adminaddcourse',
          component: adminAddCourse,
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'adminassigncourse',
          name: 'adminassigncourse',
          component: adminAssignCourse,
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'admindelcourse',
          name: 'admindelcourse',
          component: adminDelCourse,
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'admindownloaddoc',
          name: 'admindownloaddoc',
          component: adminDownloadDoc,
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'adminaddstu',
          name: 'adminaddstu',
          component: adminAddStu,
          meta: { 
            auth: true,
            role: 'admin'
          }
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

export default router