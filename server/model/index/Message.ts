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
  async getSession(uid: object) {
    let list = await db('s_session').whereOr({ uid, accept: uid }).order({ 'last_datetime': 'desc' }).select()
    for (let key in list) {
      let send = await db('s_users').where({ id: list[key].uid }).find()
      let accept = await db('s_users').where({ id: list[key].accept }).find()
      list[key].send_name = send.name
      list[key].accept_name = accept.name
      list[key].send_avatar = send.avatar
      list[key].accept_avatar = accept.avatar
    }
    return list
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
  },
  async getAvatar(data: any) {
    let s_info = await db('s_users').where({ id: data.uid }).find()
    let a_info = await db('s_users').where({ id: data.accept }).find()
    return { ret: 200, data: { 's_avatar': s_info.avatar, 'a_avatar': a_info.avatar,'a_name': a_info.name } }
  }
}