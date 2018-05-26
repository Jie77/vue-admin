const jwt = require('jsonwebtoken')
const query = require('../db')
const encrypt = require('../utils/encrypt')
/**
 * 根据用户名和密码查询是否存在该用户
 * 若存在，返回token和用户角色
 */
const login = async (ctx, next) => {
    let userInfo = ctx.request.body,
        pwd = encrypt(userInfo.pwd)
        // console.log('sno:'+userInfo.user)
        // console.log('pwd:'+pwd)
    try {
        let user = await query('select * from login where sno=? and password=?', [userInfo.user, pwd])
        // console.log(user)
        if (user.length === 0){
            ctx.body = {
                state: false,
                content: '用户名或密码错误'
            }
        } else {
            let payload = {
                userName: userInfo.user,
                role: user[0].role
            }
            let secret = 'jiangjie666'
            let token = jwt.sign(payload, secret);
            ctx.body = {
                state: true,
                content: '登陆成功',
                token: token
            }
        }
    } catch(e) {
        console.log('数据库操作错误')
        ctx.body = {
            state: false,
            content: '数据库发生错误'
        }
    }
}

/**
 * 1.查询是否有该学生信息
 * 2.查询该学生是否已注册账号
 * 有学生信息且未注册，再注册账号
 */
const regist = async (ctx, next) => {
    let userInfo = ctx.request.body,
        userName = userInfo.user,
        pwd = encrypt(userInfo.pwd),
        role = userInfo.role
        // console.log(userInfo)
    try {
        let userlist = null
        if (role === 'stu') {
            userlist = await query('select * from student where sno=?', [userName])
        } else {
            userlist = await query('select * from teacher where tno=?', [userName])
        }
        if (userlist.length != 0){
            let user = await query('select * from login where sno=?', [userName])
            // console.log(user.length)
            if (user.length === 0){
                let data = await query('insert into login values(?, ?, ?)', [userName, pwd, role])
                // console.log(data)
                ctx.body = {
                    state: true,
                    content: '注册成功'
                }
            } else {
                ctx.body = {
                    state: false,
                    content: '用户名已注册'
                }
            }
        } else {
            ctx.body = {
                state: false,
                content: '暂无该用户信息'
            }
        }
    } catch(e) {
        console.log('数据库操作错误')
        ctx.body = {
            state: false,
            content: '数据库发生错误'
        }
    }
}

exports.login = login
exports.regist = regist