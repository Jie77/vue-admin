import request from '@/utils/request'
import store from '@/store'
import { getName } from './auth'

const BaseUrl = 'http://127.0.0.1:3000'

export const getAllAllowCourse = () => {
    let sno = getName(),
        params = new URLSearchParams()
    params.append('sno', sno)
    return request({
        url: BaseUrl + '/getAllAllowCourse',
        method: 'get',
        params: params
    })
}

export const selectCourse = (cno) => {
    let sno = getName()
    return request({
        url: BaseUrl + '/selectCourse',
        method: 'post',
        data: {
            sno: sno,
            cno: cno
        }
    })
}

export const getHadSelectedCourse = () => {
    let sno = getName()
    return request({
        url: BaseUrl + '/getHadSelectedCourse',
        method: 'get',
        params: {
            sno: sno
        }
    })
}

export const delCourse = (cno) => {
    let sno = getName()
    return request({
        url: BaseUrl + '/delCourse',
        method: 'post',
        data: {
            sno: sno,
            cno: cno
        }
    })
}

export const getSchedule = () => {
    let sno = getName()
    return request({
        url: BaseUrl + '/getSchedule',
        method: 'get',
        params: {
            sno: sno
        }
    })
}

export const downloadFile = () => {

}


