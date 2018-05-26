const jwt = require('jsonwebtoken')

const permission = (ctx) => {
    let token = ctx.headers.authorization
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'jiangjie666', (err, decoded) => {
            if (err) {
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}

module.exports = permission