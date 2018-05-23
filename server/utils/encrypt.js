const crypto = require('crypto')

module.exports = (pwd) => {
    let hash = crypto.createHash("sha256")
    let res = hash.update(pwd).digest("hex")
    return res
}