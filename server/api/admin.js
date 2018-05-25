const query = require('../db')

const addCourse = async (ctx, next) => {
    let courseInfo = ctx.request.body
    try {
        let course = await query('select * from course where cno=?', [courseInfo.cno])
        if (course.length === 0){
            await query('insert into course values(?, ?, ?)', [courseInfo.cno, courseInfo.cname, courseInfo.ccredit])
            ctx.body = {
                state: true,
                content: '添加成功'
            }
        } else {
            ctx.body = {
                state: false,
                content: '该课程已存在'
            }
        }
    } catch(e) {
        console.log('捕获到错误')
        ctx.body = {
            state: false,
            content: '数据库错误'
        }
    }
}
const adminDelCourse = async (ctx, next) => {

}

/**
 * 查询该学士是否存在，不存在再添加
 */
const addStu = async (ctx, next) => {
    let stuInfo = ctx.request.body
    try {
        let stu = await query('select * from student where sno=?', [stuInfo.sno])
        if (stu.length === 0){
            let res = await query('insert into student values(?, ?, ?, ?, ?, ?, ?)', [stuInfo.sno, stuInfo.sname, stuInfo.sex, stuInfo.college, stuInfo.dept, stuInfo.stuClass, stuInfo.age])
            ctx.body = {
                state: true,
                content: '添加成功'
            }
        } else {
            ctx.body = {
                state: false,
                content: '该学生已存在'
            }
        }
    } catch(e) {
        console.log('捕获到错误')
        ctx.body = {
            state: false,
            content: '请检查班级学号等信息是否正确'
        }
    }
}

exports.addCourse = addCourse
exports.adminDelCourse = adminDelCourse
exports.addStu = addStu