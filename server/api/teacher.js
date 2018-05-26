const query = require('../db')

const giveScore = async (ctx, next) => {
    let scoreInfo = ctx.request.body
    try {
        await query('update sc set grade=? where cno=? and sno=?', [scoreInfo.grade, scoreInfo.cno, scoreInfo.sno])
        ctx.body = {
            state: true,
            content: '录入成功'
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '数据库错误'
        }
    }
}
const getStu = async (ctx, next) => {
    let tno = ctx.request.query.tno
    try {
        let stuList = await query('select student.sno, student.sname, sc.grade, ct.cno from student, sc, ct where ct.tno=? and ct.cno=sc.cno and sc.sno=student.sno', [tno])
        console.log(stuList)
        ctx.body = {
            state: true,
            content: stuList
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '数据库错误'
        }
    }
}

exports.giveScore = giveScore
exports.getStu = getStu