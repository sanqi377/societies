var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  /**
   * 获取社团级别
   */
  getType(req: any, res: any) {
    model.getType().then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },

  /**
   * 获取所属院系
   */
  getDepartment(req: any, res: any) {
    model.getDepartment().then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },

  /**
   * 添加社团
   */
  addSocieties(req: any, res: any) {
    let data = req.body
    model.addSocieties(data).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: { type: 'success', msg: '添加成功' } })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '添加失败' } })
      }
    })
  },

  /**
   * 获取社团
   */
  getSocieties(req: any, res: any) {
    model.getSocieties().then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '获取失败' } })
      }
    })
  },

  /**
   * 获取社团信息
   */
  getSocietiesInfo(req: any, res: any) {
    let { id } = req.body
    model.getSocietiesInfo(id).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '获取失败' } })
      }
    })
  },

  /**
   * 添加 / 修改公告
   */
  addNotice(req: any, res: any) {
    let data = req.body
    if (!data.id) {
      model.addNotice(data).then((resp: any) => {
        if (resp) {
          res.send({ ret: 200, data: { type: 'success', msg: '添加成功' } })
        } else {
          res.send({ ret: 200, data: { type: 'error', msg: '添加失败' } })
        }
      })
    } else {
      model.addNotice(data).then((resp: any) => {
        if (resp) {
          res.send({ ret: 200, data: { type: 'success', msg: '添加成功' } })
        } else {
          res.send({ ret: 200, data: { type: 'error', msg: '添加失败' } })
        }
      })
    }
  },

  /**
   * 获取公告
   */
  getNotice(req: any, res: any) {
    let { id } = req.body
    model.getNotice(id).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '获取失败' } })
      }
    })
  },

  /**
   * 删除公告
   */
  deleteNotice(req: any, res: any) {
    let { id } = req.body
    model.deleteNotice(id).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: { type: 'success', msg: '删除成功' } })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '删除失败' } })
      }
    })
  }
}