var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 检测是否注册
   * @param openid wx openid
   */
  isReg(openid: string) {
    return db('s_users').where({ openid }).find()
  },
  /**
   * 注册
   * @param data 用户信息
   */
  reg(data: any) {
    console.log(data)
    return db('s_users').insert(data)
  }
}