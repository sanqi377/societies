var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 后台获取菜单
   */
  getMenu() {
    return new Promise((resolve) => {
      db('s_menu').where({ pid: 0, status: 1 }).order({ 'sort': 'asc' }).select().then((res: any) => {
        for (let i = 0; i < res.length; i++) {
          res[i].children = []
          db('s_menu').where({ pid: res[i].id, status: 1 }).order({ 'sort': 'asc' }).select().then((resp: any) => {
            res[i].children = resp
            if (i === res.length - 1) resolve(res)
          })
        }
      })
    })
  },
  /**
   * 后台删除菜单
   * @param id 菜单id
   */
  deleteMenu(id: number) {
    return db('s_menu').where({ id }).delete()
  },
  /**
   * 后台修改菜单
   * @param data 修改内容
   */
  reviseMenu(data: any) {
    delete data.children
    return db('s_menu').where({ id: data.id }).update(data)
  },
  /**
   * 新增修改菜单
   * @param data 修改内容
   */
  addMenu(data: any) {
    return db('s_menu').insert(data)
  }
}