const query = require('../db')
const encrypt = require('../utils/encrypt')
const path = require('path')
const fs = require('fs')

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
        // console.log(stuList)
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

/**
 * param.append('cno',this.value)
 * param.append('file',this.file[0])
 */

const uploadFile = async (ctx, next) => {
    let file = ctx.request.body.files.file
    // let filePath = path.join(__dirname, 'public', 'kejian', `${file.name}`)
    let filePath = path.resolve('./', 'public', 'kejian', `${file.name}`)
    console.log(filePath)
    console.log(file.path)
    let reader = fs.createReadStream(file.path)
    let writer = fs.createWriteStream(filePath)
    reader.pipe(writer)
    ctx.body = 'jj'
}
const getTeachCourse = async (ctx, next) => {
    let tno = ctx.request.query.tno
    try {
        let courseList = await query('select cno from ct where tno=?', [tno])
        let list = []
        for (item of courseList) {
            list.push({
                value: item.cno,
                label: item.cno
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

exports.giveScore = giveScore
exports.getStu = getStu
exports.uploadFile = uploadFile
exports.getTeachCourse = getTeachCourse