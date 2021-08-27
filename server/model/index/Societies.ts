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
  getSocietiesInfo(id: number, uid: number) {
    return new Promise((resolve) => {
      db('s_societies').where({ id }).find().then((res: any) => {
        db('s_department').where({ id: res.department }).find().then((resp: any) => {
          res.department = resp.name
          db('s_interest').where({ societies_id: id, user_id: uid }).select().then((respo: any) => {
            if (respo.length != 0) {
              res.isFans = true
            } else {
              res.isFans = false
            }
            resolve(res)
          })
        })
      })
    })
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
  },
  /**
   * 正在纳新的社团
   * @returns 
   */
  newSocietiesList() {
    return db("s_societies").where({ welcome_status: 1 }).select()
  },
  /**
   * 关注社团
   */
  interestSocieties(data: any) {
    return db("s_interest").insert(data)
  },

  /**
   * 获取热门社团
   */
  getHotsSocieties(limit:number){
    return db("s_societies").order({'hots':'desc'}).limit(limit)
  }
}