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
    let sno = ctx.request.query.sno
    console.log(sno)
    try {
        let courseList = await query('select course.cname, course.cno, course.ccredit from student, course, cc where student.sno=? and student.sclass = cc.class and cc.cno = course.cno and course.cno not in (select cno from sc where sno=?)', [sno, sno])
        ctx.body = {
            state: true,
            content: courseList
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: "数据库错误"
        }
    }
}
const getHadSelectedCourse = async (ctx, next) => {
    let sno = ctx.request.query.sno
    try {
        let courseList = await query('select course.cname, course.cno, course.ccredit from sc, course where sc.sno=? and sc.cno=course.cno', [sno])
            ctx.body = {
                state: true,
                content: courseList
            }
    } catch(e) {
        ctx.body = {
            state: false,
            content: "数据库错误"
        }
    }
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
    let scInfo = ctx.request.body
    try {
        await query('delete from sc where sno=? and cno=?', [scInfo.sno, scInfo.cno])
        ctx.body = {
            state: true,
            content: '删除成功'
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '数据库错误'
        }
    }
}

const getSchedule = async (ctx, next) => {
    let sno = ctx.request.query.sno
    try {
        let list = await query('select course.cname, cc.day, cc.orderNum from cc, sc, student, course where sc.sno = ? and sc.sno=student.sno and student.sclass=cc.class and sc.cno=cc.cno and course.cno=sc.cno', [sno])
        let courseList = []
        // console.log(list)
        for(let round = 1; round < 5 ; round++){
            /**
             * course: 所有天的第round节课
             */
            let course = list.filter(item => {
                return item.orderNum == ~~round
            })
            // console.log(course)
            let o = {
                'Mon': '无',
                'Tue': '无',
                'Wed': '无',
                'Thu': '无',
                'Fri': '无'
            }
            for(let item of course){
                switch(item.day) {
                    case '1':
                        o['Mon'] = item.cname
                        break
                    case '2':
                        o['Tue'] = item.cname
                        break
                    case '3':
                        o['Wed'] = item.cname
                        break
                    case '4':
                        o['Thu'] = item.cname
                        break
                    case '5':
                        o['Fri'] = item.cname
                        break
                }
            }
            courseList.push(o)
        }
        // console.log(courseList)
        ctx.body = {
            state: true,
            content: courseList
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: "数据库错误"
        }
    }
}

exports.getAllAllowCourse = getAllAllowCourse
exports.getHadSelectedCourse = getHadSelectedCourse
exports.selectCourse = selectCourse
exports.delCourse = delCourse
exports.getSchedule = getSchedule


