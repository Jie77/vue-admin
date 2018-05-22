import { loginByName } from '@/api/login'
import { saveToken } from '@/api/auth'
import base64url from "base64url"
import nav from '@/conf/navList'

const user = {
    state: {
        userName: '',
        token: '',
        role: '',
        nav: []
    },
    getters: {
        userName: state => state.userName,
        token: state => state.token,
        role: state => state.role,
        nav: state => state.nav
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.userName = name
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_ROLE: (state, role) => {
            state.role = role
        },
        SET_NAV: (state, nav) => {
            state.nav = nav
        }
    },
    actions: {
        Login({ commit }, userInfo){
            console.log('触发login')
            return new Promise((resolve, reject)=>{
                loginByName(userInfo.user, userInfo.pwd).then(res => {
                    let data = res.data,
                        token = data.token,
                        user = JSON.parse(base64url.decode(token.split('.')[1]))
                    console.log(user)
                    let permissionNav = nav.filter(element => {
                        return element.role === user.role
                    });
                    commit('SET_TOKEN',token)
                    commit('SET_NAME', user.userName)
                    commit('SET_ROLE', user.role)
                    commit('SET_NAV', permissionNav)
                    saveToken(token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user