const mysql = require('mysql')
const { HOST, USER, PWD, DB } = require('./conf')

const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PWD,
    database: DB
})

const mysqlQuery = function(query, param) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                console.log('数据库连接错误')
                reject(err)
            } else {
                connection.query(query, param, function(error, results, fields) {
                    connection.release()
                    if (error) {
                        console.log('数据库操作错误')
                        reject(new Error(error))
                    } else {
                        resolve(results)
                    }
                })
            }
        })
    })
}

module.exports = mysqlQuery