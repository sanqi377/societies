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
      db('s_subscribe').where({ subscribe: data.subscribe, be_subscribe: data.be_subscribe }).find().then((res: any) => {
        if (res) {
          resolve({ ret: 201, msg: '不能重复关注' })
        } else {
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
   * 申请加入社团
   * @param data 
   */
  async applySocieties(data: any) {
    let apply = await db('s_apply').where({ user_id: data.uid, societies_id: data.societiesId }).find()
    let send = {
      ret: 200,
      msg: '申请成功'
    }
    if (apply) {
      send = {
        ret: 200,
        msg: '已经申请过了，请耐心等待'
      }
    } else {
      await db("s_apply").insert({ user_id: data.uid, societies_id: data.societiesId, introduction: data.introduction })
    }
    return send
  },

  /**
   * 查询当前社团申请状态
   */

  async getApplyStatus(data:any){
   let apply= await db('s_apply').where({ user_id: data.uid, societies_id: data.societiesId }).find()
   let send = {
    ret: 200,
    msg: '立即申请'
  }
    if(apply){
      if(apply.status==0){
        send = {
          ret: 200,
          msg: '已申请'
        }
      }else{
        send = {
          ret: 200,
          msg: '已通过'
        }
      }
    }
    return send
  }
}