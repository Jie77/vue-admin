import request from '@/utils/request'

export const loginByName = (user, pwd) => {
    let param = {
        user: user,
        pwd: pwd
    }
    return request({
        url: 'http://127.0.0.1:3000/login',
        method: 'post',
        data: param
    })
}

export const registByName = (user, pwd) => {
    let param = {
        user: user,
        pwd: pwd
    }
    return request({
        url: 'http://127.0.0.1:3000/reg',
        method: 'post',
        data: param
    })
}