const mysql = require('mysql')
const { HOST, USER, PWD, DB } = require('./conf')

const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PWD,
    database: DB
})

const mysqlQuery = function(query) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(query, function(error, results, fields) {
                    connection.release()
                    if (error) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                })
            }
        })
    })
}

module.exports = mysqlQuery