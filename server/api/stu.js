const query = require('../db')
/**
 * 
 * @param {*} ctx 
 * @param {*} next 
 * 返回格式
 * [
        {
            courseID: 'CH0001',
            courseName: '课程一',
            courseScore: '10'
        },
        {
            courseID: 'CH0001',
            courseName: '课程一',
            courseScore: '10'
        }
    ]
 */
const getAllAllowCourse = async (ctx, next) => {
    let userName = ctx.request.query.stuNum
    // console.log(userName)
    try {
        let 
    } catch(e) {

    }
    ctx.body = 'success'
}
const getHadSelectedCourse = async (ctx, next) => {

}
const selectCourse = async (ctx, next) => {

}
const delCourse = async (ctx, next) => {

}

exports.getAllAllowCourse = getAllAllowCourse
exports.getHadSelectedCourse = getHadSelectedCourse
exports.selectCourse = selectCourse
exports.delCourse = delCourse



