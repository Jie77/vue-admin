import request from '@/utils/request'
import store from '@/store'
import { getName } from './auth'

const BaseUrl = 'http://127.0.0.1:3000'

export const giveScore = (scoreInfo) => {
    return request({
        url: BaseUrl + '/giveScore',
        method: 'post',
        data: scoreInfo
    })
}

export const getStu = () => {
    let tno = getName()
    return request({
        url: BaseUrl + '/getStu',
        method: 'get',
        params: {
            tno: tno
        }
    })
}

export const getTeachCourse = () => {
    let tno = getName()
    return request({
        url: BaseUrl + '/getTeachCourse',
        method: 'get',
        params: {
            tno: tno
        }
    })
}

export const uploadFile = (form) => {
    return request({
        url: BaseUrl + '/uploadFile',
        method: 'post',
        data: form
    })
}