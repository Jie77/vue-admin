import request from '@/utils/request'
import store from '@/store'

const BaseUrl = 'http://127.0.0.1:3000'
const userName = store.getters.userName

export const getAllAllowCourse = function() {
    return request({
        url: BaseUrl + '/getAllAllowCourse',
        method: 'get',
        params: {
            stuNum: userName
        }
    })
}

export const selectCourse = function(courseNum) {
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
    return request({
        url: BaseUrl + '/getHadSelectedCourse',
        method: 'get',
        params: {
            stuNum: userName
        }
    })
}

export const delCourse = function(courseNum) {
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


