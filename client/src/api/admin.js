import request from '@/utils/request'
import store from '@/store'

const BaseUrl = 'http://127.0.0.1:3000'

export const addCourse = (courseInfo) => {
    return request({
        url: BaseUrl + '/addCourse',
        method: 'post',
        data: courseInfo
    })
}

export const adminDelCourse = (cno) => {
    return request({
        url: BaseUrl + '/adminDelCourse',
        method: 'post',
        data: {
            cno: cno
        }
    })
}

export const addStu = (stuInfo) => {
    return request({
        url: BaseUrl + '/addStu',
        method: 'post',
        data: stuInfo
    })
}

export const getAllCourse = () => {
    return request({
        url: BaseUrl + '/getAllCourse',
        method: 'get'
    })
}

export const assignCourse = (courseInfo) => {
    return request({
        url: BaseUrl + '/assignCourse',
        method: 'post',
        data: courseInfo
    })
}

export const getAllStu = (scollege) => {
    return request({
        url: BaseUrl + '/getAllStu',
        method: 'get',
        params: {
            scollege: scollege
        }
    })
}

export const getCollegeList = () => {
    return request({
        url: BaseUrl + '/getCollegeList',
        method: 'get'
    })
}


