import Vue from 'vue'
import Router from 'vue-router'
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
      component: resolve => require(['@/page/login'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/page/register'], resolve)
    },
    {
      path: '/layout',
      name: 'layout',
      component: resolve => require(['@/components/layout/layout'], resolve),
      meta: { 
        auth: true
      },
      children: [
        {
          path: 'selectcourse',
          name: 'selectcourse',
          component: resolve => require(['@/page/stu/selectCourse'], resolve),
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'delcourse',
          name: 'delcourse',
          component: resolve => require(['@/page/stu/delCourse'], resolve),
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'downloaddoc',
          name: 'downloaddoc',
          component: resolve => require(['@/page/stu/downloadDoc'], resolve),
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'studoc',
          name: 'studoc',
          component: resolve => require(['@/page/stu/stuDoc'], resolve),
          meta: { 
            auth: true,
            role: 'stu'
          }
        },
        {
          path: 'adminaddcourse',
          name: 'adminaddcourse',
          component: resolve => require(['@/page/admin/addCourse'], resolve),
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'adminassigncourse',
          name: 'adminassigncourse',
          component: resolve => require(['@/page/admin/assignCourse'], resolve),
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'admindelcourse',
          name: 'admindelcourse',
          component: resolve => require(['@/page/admin/delCourse'], resolve),
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'admindownloaddoc',
          name: 'admindownloaddoc',
          component: resolve => require(['@/page/admin/downloadDoc'], resolve),
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'adminaddstu',
          name: 'adminaddstu',
          component: resolve => require(['@/page/admin/addstu'], resolve),
          meta: { 
            auth: true,
            role: 'admin'
          }
        },
        {
          path: 'grade',
          name: 'grade',
          component: resolve => require(['@/page/teacher/grade'], resolve),
          meta: { 
            auth: true,
            role: 'teacher'
          }
        },
        {
          path: 'stuinfo',
          name: 'stuinfo',
          component: resolve => require(['@/page/teacher/stuInfo'], resolve),
          meta: { 
            auth: true,
            role: 'teacher'
          }
        },
        {
          path: 'uploadfile',
          name: 'uploadfile',
          component: resolve => require(['@/page/teacher/uploadFile'], resolve),
          meta: { 
            auth: true,
            role: 'teacher'
          }
        }
      ]
    },
    {
      path: '/*',
      name: '404',
      component: resolve => require(['@/page/notFound'], resolve),
    }
  ]
})

export default router