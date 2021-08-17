var { query, remove } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 后台获取分类
   */
  getClassification() {
    return query('s_classification', '', 'status=1', 'sort asc')
  },

  /**
   * 后台删除分类
   * @param id 菜单id
   */
  deleteClassification(id: number) {
    return remove('s_classification', `id=${id}`)
  }
}