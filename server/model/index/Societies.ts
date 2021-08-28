var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 获取社团级别
   */
  getType() {
    return db('s_societies_type').select()
  },

  /**
   * 获取所属院系
   */
  getDepartment() {
    return db('s_department').select()
  },

  /**
   * 获取社团
   */
  getSocieties() {
    return new Promise((resolve) => {
      db('s_societies').select().then((res: any) => {
        res.forEach((item: any, index: number) => {
          db('s_societies_type').where({ id: item.type_id }).find().then((resp: any) => {
            item.type_id = resp.name
            if (index === res.length - 1) resolve(res)
          })
        });
      })
    })
  },

  /**
   * 获取社团信息
   */
  async getSocietiesInfo(id: number, uid: number) {
    let info = await db('s_societies').where({ id }).find()
    let department = await db('s_department').where({ id: info.department }).find()
    info.department = department.name
    let fans = await db('s_subscribe').where({ subscribe: uid, be_subscribe: info.admin }).find()
    if (fans) {
      info.fans = true
    } else {
      info.fans = false
    }
    return info
  },

  /**
   * 获取社团公告
   */
  getNotice(id: number) {
    return db('s_notice').where({ college_id: id }).order({ 'add_time': 'desc' }).select()
  },

  /**
   * 增加社团热度
   */
  addHots(id: number) {
    return new Promise((resolve) => {
      db("s_societies").where({ id }).find().then((res: any) => {
        res.hots++
        db("s_societies").where({ id }).update({ hots: res.hots }).then((resp: any) => {
          resolve(resp)
        })
      })
    })
  }
}