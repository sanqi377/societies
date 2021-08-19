var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 检测是否注册
   * @param openid wx openid
   */
  isReg(openid: string) {
    return db('s_users').where({ open_id: openid }).find()
  },
  /**
   * 注册
   * @param data 用户信息
   */
  reg(data: any) {
    return db('s_users').insert(data)
  }
}