import request from '@/utils/request'
import store from '@/store'
import { getName } from './auth'

const BaseUrl = 'http://127.0.0.1:3000'

export const getAllAllowCourse = function() {
    let userName = getName(),
        params = new URLSearchParams()
    params.append('stuNum', userName)
    return request({
        url: BaseUrl + '/getAllAllowCourse',
        method: 'get',
        params: params
    })
}

export const selectCourse = function(courseNum) {
    let userName = getName()
    return request({
        url: BaseUrl + '/selectCourse',
        method: 'post',
        data: {
            stuNum: userName,
            courseNum: courseNum
        }
    })
}

export const getHadSelectedCourse = function() {
    let userName = getName()
    return request({
        url: BaseUrl + '/getHadSelectedCourse',
        method: 'get',
        params: {
            stuNum: userName
        }
    })
}

export const delCourse = function(courseNum) {
    let userName = getName()
    return request({
        url: BaseUrl + '/delCourse',
        method: 'post',
        data: {
            stuNum: userName,
            courseNum: courseNum
        }
    })
}

export const downloadFile = function() {

}


