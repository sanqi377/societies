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
   * 添加社团
   * @param data 
   */
  addSocieties(data: any) {
    return db('s_societies').insert(data)
  },

  /**
   * 获取社团
   */
  getSocieties() {
    return db('s_societies').select()
  },

  /**
   * 获取社团信息
   */
  getSocietiesInfo(id: number) {
    return db('s_societies').where({ id }).find()
  },

  /**
   * 添加社团公告
   */
  addNotice(data: any) {
    if (data.id) {
      let id = data.id
      delete data.id
      return db('s_notice').where({ id }).update(data)
    } else {
      return db('s_notice').insert(data)
    }
  },

  /**
   * 获取社团公告
   */
  getNotice(id: number) {
    return db('s_notice').where({ college_id: id }).order({ 'add_time': 'desc' }).select()
  },

  /**
   * 删除社团公告
   */
  deleteNotice(id: number) {
    return db('s_notice').where({ id }).delete()
  }
}