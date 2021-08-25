var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 发送消息
   * @param data 
   * @returns 
   */
  sendMessage(data: object) {
    return db('s_message').insert(data)
  },
  /**
   * 获取消息列表
   * @param accept 
   * @returns 
   */
   getSession(uid: object) {
    return db('s_session').where(uid).select()
  },
  getId(open_id: object) {
    return db('s_users').where(open_id).find()
  }
}