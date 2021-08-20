var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  /**
   * 获取菜单
   */
  getMenu(req: any, res: any) {
    let { role } = req.body
    model.getMenu(role).then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },

  /**
   * 删除菜单
   */
  deleteMenu(req: any, res: any) {
    let { id } = req.body
    model.deleteMenu(id).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: { type: 'success', msg: '删除成功' } })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '服务器错误' } })
      }
    })
  },

  /**
   * 菜单保存修改
   */
  saveMenu(req: any, res: any) {
    let data = req.body
    // 有 id 为修改反之为添加
    if (data.id) {
      model.reviseMenu(data).then((resp: any) => {
        if (resp) {
          res.send({ ret: 200, data: { type: 'success', msg: '修改成功' } })
        } else {
          res.send({ ret: 200, data: { type: 'error', msg: '修改失败' } })
        }
      })
    } else {
      model.addMenu(data).then((resp: any) => {
        if (resp) {
          res.send({ ret: 200, data: { type: 'success', msg: '添加成功' } })
        } else {
          res.send({ ret: 200, data: { type: 'error', msg: '添加失败' } })
        }
      })
    }
  }
}