var { query, remove, update, insert } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 后台获取菜单
   */
  getMenu() {
    return new Promise((resolve) => {
      query('s_menu', '', 'pid=0 and status=1', 'sort asc').then((res: any) => {
        for (let i = 0; i < res.length; i++) {
          res[i].children = []
          query('s_menu', '', `pid=${res[i].id} and status=1`).then((resp: any) => {
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
    return remove('s_menu', `id=${id}`)
  },

  /**
   * 后台修改菜单
   * @param data 修改内容
   */
  reviseMenu(data: any) {
    let id = data.id
    let arr: string[] = []
    Object.keys(data).forEach((item: any, index: any) => {
      Object.values(data).forEach((items: any, idx: any) => {
        if (index === idx) {
          if (typeof (items) === 'string') items = `'${items}'`
          arr.push(item + '=' + items)
        }
      })
    })
    arr.forEach((item: any, idx: number) => {
      if (idx === 0) arr.splice(idx, 1)
      if (idx === arr.length - 1) arr.splice(idx, 1)
    })
    let str = arr.toString()
    return update('s_menu', `id=${id}`, `${str}`)
  },

  /**
   * 新增修改菜单
   * @param data 修改内容
   */
  addMenu(data: any) {
    let arr: string[] = []
    Object.keys(data).forEach((item: any, index: any) => {
      Object.values(data).forEach((items: any, idx: any) => {
        if (index === idx) {
          if (typeof (items) === 'string') items = `'${items}'`
          arr.push(item + '=' + items)
        }
      })
    })
    arr.forEach((item: any, idx: number) => {
      if (idx === 0) arr.splice(idx, 1)
      if (idx === arr.length - 1) arr.splice(idx, 1)
    })
    let str = arr.toString()
    console.log(str)
    // return update('s_menu', `id=${id}`, `${str}`)
  }
}