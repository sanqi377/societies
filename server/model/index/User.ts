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
  },

  /**
   * 关注
   *
   * @param {*} data
   * @return {*} 
   */
  subscribe(data: any) {
    return new Promise((resolve) => {
      if (data.subscribe === data.be_subscribe) {
        resolve({ ret: 201, msg: '不能关注自己' })
        return
      }
      db('s_subscribe').where({ subscribe: data.subscribe, be_subscribe: data.be_subscribe }).find().then((res: any) => {
        if (res) {
          resolve({ ret: 201, msg: '不能重复关注' })
        } else {
          console.log(11)
          db('s_subscribe').insert(data).then(() => {
            resolve({ ret: 200, msg: '关注成功' })
          })
        }
      })
    })
  },
  /**
   * 取消关注
   *
   * @param {*} data
   * @return {*} 
   */
  async cancelSubscribe(data: any) {
    let send = {
      ret: 200,
      msg: '取消关注成功'
    }
    let subscribe = await db('s_subscribe').where({ subscribe: data.subscribe, be_subscribe: data.be_subscribe }).find()
    if (subscribe) {
      await db('s_subscribe').where({ id: subscribe.id }).delete()
    } else {
      send.ret = 201
      send.msg = '服务器错误'
    }
    return send
  },

  /**
   * 获取基本信息
   *
   * @param {number} uid
   * @return {*} 
   */
  async getInfo(uid: number) {
    let focus = await db('s_subscribe').where({ subscribe: uid }).select()
    let fans = await db('s_subscribe').where({ be_subscribe: uid }).select()
    let info = await db('s_users').where({ id: uid }).find()
    let dynamic = await db('s_dynamic').where({ uid }).select()
    let infos = {
      name: '',
      avatar: '',
      student_id: '',
      focus: 0,
      fans: 0,
      dynamic: 0
    }
    infos.name = info.name
    infos.avatar = info.avatar
    infos.student_id = info.student_id
    infos.focus = focus.length
    infos.fans = fans.length
    infos.dynamic = dynamic.length
    return { ret: 200, data: infos }
  }
}