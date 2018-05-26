const query = require('../db')
const encrypt = require('../utils/encrypt')
const path = require('path')
const fs = require('fs')
const permission = require('../utils/permission')

const giveScore = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
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
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
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


const uploadFile = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
    let file = ctx.request.body.files.file,
        cno = ctx.request.body.fields.cno,
        fname = file.name,
        fileName = encrypt(Date.now().toString()) + fname.slice(fname.indexOf('.')),
        filePath = path.resolve('./', 'public', 'kejian', fileName ),
        reader = fs.createReadStream(file.path),
        writer = fs.createWriteStream(filePath)
    reader.pipe(writer)
    let fpath = 'http://127.0.0.1:3000/kejian/' + fileName
    try {
        await query('insert into cfile values(?, ?, ?)', [cno, fpath, fname])
        ctx.body = {
            state: true,
            content: '上传成功'
        }
    } catch(e) {
        ctx.body = {
            state: false,
            content: '数据库错误'
        }
    }
}

const getTeachCourse = async (ctx, next) => {
    try {
        let auth = await permission(ctx)
    } catch(e) {
        ctx.throw(401, 'No Authorization')
    }
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