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
    model.addHots(id).then((resp: any) => {
      res.send({ ret: 200, data: { msg: "浏览成功" } })
    })
  },

  /**
   * 正在纳新的社团
   */
  newSocietiesList(req: any, res: any) {
    model.newSocietiesList().then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { msg: '请求失败' } })
      }
    })
  },
  /**
   * 获取热门社团
   */

  getHotsSocieties(req: any, res: any) {
    let limit = req.body.limit
    model.getHotsSocieties(limit).then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },
  /**
   * 申请加入社团
   *
   * @param {*} req
   * @param {*} res
   */
  applySocieties(req: any, res: any) {
    let data = req.body
    model.applySocieties(data).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: { msg: '申请成功' } })
      } else {
        res.send({ ret: 201, data: { msg: '申请失败' } })
      }
    })
  }
}