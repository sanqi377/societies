var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
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
    let { id, uid } = req.body
    model.getSocietiesInfo(id, uid).then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
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
   * 增加社团热度
   */
  addHots(req: any, res: any) {
    let { id } = req.body
    model.addHots(id).then(() => {
      res.send({ ret: 200, data: { msg: "浏览成功" } })
    }).catch((e: any) => {
      res.send({ ret: 201, data: { msg: e.message } })
    })
  }
}