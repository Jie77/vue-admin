import store from '@/store'
import router from './router'
import { getToken } from '@/api/auth'


router.beforeEach((to, from, next) => {
    let role = store.getters.role
    console.log('kkk')
    if (to.meta.auth) {
        console.log(" this page need permission ")
        console.log("tometa:"+to.meta.role)
        console.log("role"+role)
        if (getToken() && to.meta.role === role) {
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