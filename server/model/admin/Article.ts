var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 后台获取分类
   */
  getClassification() {
    return db('s_classification').where({ status: 1 }).select()
  },

  /**
   * 后台删除分类
   * @param id 菜单id
   */
  deleteClassification(id: number) {
    return db('s_classification').where({ id }).delete()
  }
}