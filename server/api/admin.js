const query = require('../db')
const permission = require('../utils/permission')
/**
 * 查询课程是否存在，不存在再添加
 */
const addCourse = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
    let courseInfo = ctx.request.body
    try {
        let teacher = await query('select * from teacher where tno=?', [courseInfo.teacher])
        if (teacher.length != 0) {
            let course = await query('select * from course where cno=?', [courseInfo.cno])
            if (course.length === 0){
                await query('insert into course values(?, ?, ?)', [courseInfo.cno, courseInfo.cname, courseInfo.credit])
                await query('insert into ct values(?,?)', [courseInfo.cno, courseInfo.teacher]) 
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
        } else {
            ctx.body = {
                state: false,
                content: '该教师不存在'
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

const getAllCourse = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
    try {
        let courseList = await query('select * from course')
        ctx.body = {
            state: true,
            courseList: courseList
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '获取课程失败'
        }
    }
}

const adminDelCourse = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
    let cno = ctx.request.body.cno
    try {
        await query('delete from course where cno=?', [cno])
        ctx.body = {
            state: true,
            content: '删除成功'
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '删除失败'
        }
    }
}

/**
 * 查询该学生是否存在，不存在再添加
 */
const addStu = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
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

/**
 * 1.查询课程是否存在
 * 2.查询该课是否已经分配
 * 3.查询时间段是否已被占用
 * 4.符合全部条件再添加
 */

const assignCourse = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
    let courseInfo = ctx.request.body
    try {
        let isClass = await query('select * from colleges where class=?', [courseInfo.classNum])
        if (isClass.length != 0) {
            let course = await query('select * from course where cno=?', [courseInfo.cno])
            if (course.length != 0){
                let classIsAssign = await query('select * from cc where class=? and cno=?', [courseInfo.classNum, courseInfo.cno])
                if (classIsAssign.length === 0){
                    let dayIsAssign = await query('select * from cc where class=? and day=? and orderNum=?', [courseInfo.classNum, courseInfo.day, courseInfo.orderNum])
                    if (dayIsAssign.length === 0){
                        await query('insert into cc values(?, ?, ?, ?)', [courseInfo.classNum, courseInfo.cno, courseInfo.day, courseInfo.orderNum])
                        ctx.body = {
                            state: true,
                            content: '分配成功'
                        }
                    } else {
                        ctx.body = {
                            state: false,
                            content: '该班级该时间已经分配'
                        }
                    }
                } else {
                    ctx.body = {
                        state: false,
                        content: '该节课已经分配'
                    }
                }
            } else {
                ctx.body = {
                    state: false,
                    content: '该课程不存在'
                }
            }
        } else {
            ctx.body = {
                state: false,
                content: '该班级不存在'
            }
        }  
    } catch(e) {
        ctx.body = {
            state: false,
            content: '分配失败'
        }
    }
}

const getAllStu = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
    let scollege = ctx.request.query.scollege
    console.log(scollege)
    try {
        let stuList = await query('select sno, sname, ssdept from student where scollege = ?', [scollege])
        if (stuList.length === 0) {
            ctx.body = {
                state: false,
                content: '暂无该学院学生信息'
            }
        } else {
            ctx.body = {
                state: true,
                content: stuList
            }
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '数据库错误'
        }
    }
}

const getCollegeList = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
    try {
        let collegeList = await query('select college from colleges group by college')
        let list = []
        for (item of collegeList) {
            list.push({
                value: item.college,
                label: item.college
            })
        }
        ctx.body = {
            state: true,
            content: list
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '数据库错误'
        }
    }
}


exports.addCourse = addCourse
exports.adminDelCourse = adminDelCourse
exports.addStu = addStu
exports.getAllCourse = getAllCourse
exports.assignCourse = assignCourse
exports.getAllStu = getAllStu
exports.getCollegeList = getCollegeList