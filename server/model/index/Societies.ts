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
  getSocietiesInfo(id: number) {
    return new Promise((resolve) => {
      db('s_societies').where({ id }).find().then((res: any) => {
        db('s_department').where({ id: res.department }).find().then((resp: any) => {
          res.department = resp.name
          resolve(res)
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
}