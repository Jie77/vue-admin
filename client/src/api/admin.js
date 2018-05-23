import request from '@/utils/request'
import store from '@/store'

const BaseUrl = 'http://127.0.0.1:3000'

export const addCourse = function(courseInfo) {
    return request({
        url: BaseUrl + '/addCourse',
        method: 'post',
        data: courseInfo
    })
}

export const adminDelCourse = function(courseNum) {
    return request({
        url: BaseUrl + '/adminDelCourse',
        method: 'post',
        data: {
            courseNum: courseNum
        }
    })
}

export const addStu = function(stuInfo) {
    return request({
        url: BaseUrl + '/addStu',
        method: 'post',
        data: stuInfo
    })
}

export const adminDownloadFile = function() {

}


