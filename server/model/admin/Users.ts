var { db } = require('../../util/mysqlInit')
var md5 = require('md5-node')
module.exports = {
  /**
   * 检测是否注册
   * @param username 用户名
   * @returns 
   */
  isReg(username: string) {
    db('s_remember').where({ username }).find().then((res: any) => {
      console.log(res)
    })
    // return query('s_remember', '', `username='${username}'`)
  },

  /**
   * 验证账号密码是否正确
   * @param data 账号密码
   */
  login(data: any) {
    return new Promise((resolve) => {
      query('s_remember', 'salt,password', `username='${data.username}'`).then((res: any) => {
        let datas = res[0]
        let password = md5(md5(data.password) + datas.salt)
        let status = false
        password === datas.password ? status = true : status = false
        resolve(status)
      })
    })
  },
  getUserInfo(username: string) {
    return query('s_remember', '', `username='${username}'`)
  }
}