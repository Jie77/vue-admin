const query = require('../db')
/**
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
    let scInfo = ctx.request.body
    try {
        let isSelect = await query('select * from sc where sno=? and cno=?', [scInfo.sno, scInfo.cno])
        if (isSelect.length === 0){
            await query('insert into sc values(?, ?, ?)', [scInfo.sno, scInfo.cno, '无'])
            ctx.body = {
                state: true,
                content: '选课成功'
            }
        } else {
            ctx.body = {
                state: false,
                content: '已经选过该课程'
            }
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '请检查课程号是否正确'
        }
    }
}
const delCourse = async (ctx, next) => {

}

exports.getAllAllowCourse = getAllAllowCourse
exports.getHadSelectedCourse = getHadSelectedCourse
exports.selectCourse = selectCourse
exports.delCourse = delCourse



