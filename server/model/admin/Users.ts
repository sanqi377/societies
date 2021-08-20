var { db } = require('../../util/mysqlInit')
var md5 = require('md5-node')
module.exports = {
  /**
   * 检测是否注册
   * @param username 用户名
   * @returns 
   */
  isReg(username: string) {
    return db('s_users').where({ user: username }).find()
  },

  /**
   * 验证账号密码是否正确
   * @param data 账号密码
   */
  login(data: any) {
    return new Promise((resolve) => {
      db('s_users').where({ user: data.username }).find().then((res: any) => {
        let password = md5(md5(data.password) + res.salt)
        let status = false
        password === res.pass ? status = true : status = false
        resolve(status)
      })
    })
  },

  /**
   * 查询管理员信息
   * @param username 用户名
   * @returns 
   */
  getUserInfo(username: string) {
    return db('s_users').where({ user: username }).find()
  },

  /**
   * 后台用户管理
   * @param data 
   */
  getUsers(data: any) {
    return db('s_users').where(data).select()
  }
}