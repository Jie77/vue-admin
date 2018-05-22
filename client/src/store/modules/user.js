import { loginByName, saveToken } from '@/api/login'
import base64url from "base64url"

const user = {
    state: {
        userName: '',
        token: '',
        role: ''
    },
    getters: {
        userName: state => state.userName,
        token: state => state.token,
        role: state => state.role
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.userName = name
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_ROLE: (state, role)=>{
            state.role = role
        }
    },
    actions: {
        Login({ commit }, userInfo){
            console.log('触发login')
            return new Promise((resolve, reject)=>{
                loginByName(userInfo.user, userInfo.pwd).then(res => {
                    let data = res.data,
                        token = data.token
                    commit('SET_TOKEN',token)
                    // let user = base64url.decode(token.split('.')[1])
                    // commit('SET_NAME', user.userName)
                    // commit('SET_ROLE', user.role)
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