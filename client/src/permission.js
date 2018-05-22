import store from '@/store'
import router from './router'
import { getToken, getRole } from '@/api/auth'


router.beforeEach((to, from, next) => {
    console.log('kkk')
    if (to.meta.auth) {
        if (getToken() && to.meta.role === getRole()) {
            next()
        }else {
            next({
                path: '/login'
            })
        }
    }else {
        next()
    }
})