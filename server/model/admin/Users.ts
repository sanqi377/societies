var { db } = require('../../util/mysqlInit')
var md5 = require('md5-node')
module.exports = {
  /**
   * 检测是否注册
   * @param username 用户名
   * @returns 
   */
  isReg(username: string) {
    return db('s_remember').where({ username }).find()
  },

  /**
   * 验证账号密码是否正确
   * @param data 账号密码
   */
  login(data: any) {
    return new Promise((resolve) => {
      db('s_remember').where({ username: data.username }).find().then((res: any) => {
        let password = md5(md5(data.password) + res.salt)
        let status = false
        password === res.password ? status = true : status = false
        resolve(status)
      })
    })
  },
  getUserInfo(username: string) {
    return db('s_remember').where({ username }).find()
  }
}