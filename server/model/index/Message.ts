var { db } = require('../../util/mysqlInit')
interface updateUnread {
  fid: number,
  u_unread: number,
  a_unread: number,
  send: number
}
module.exports = {
  /**
   * 获取历史消息
   * @param fid 
   * @returns 
   */
  getHistoryMsg(fid: object) {
    return db('s_message').where({ fid }).select()
  },
  /**
   * 获取消息列表
   * @param accept 
   * @returns 
   */
  getSession(uid: object) {
    return db('s_session').whereOr({ uid, accept: uid }).order({ 'last_datetime': 'desc' }).select()
  },
  /**
   * 更新未读消息
   * @param {object} data
   */

  updateUnread(data: updateUnread) {
    if (!data.send) {
      db('s_session').where({ id: data.fid }).update({ u_unread: data.u_unread, a_unread: data.a_unread })
    } else {
      db('s_session').where({ id: data.fid, uid: data.send }).update({ u_unread: 0 })
      db('s_session').where({ id: data.fid, accept: data.send }).update({ a_unread: 0 })
    }
  },
  getId(open_id: object) {
    return db('s_users').where(open_id).find()
  }
}