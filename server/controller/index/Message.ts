export { }

const model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  /**
   * 获取历史消息
   * @param req 
   * @param res 
   */
  getHistoryMsg(req: any, res: any) {
    let { fid } = req.body
    model.getHistoryMsg(fid).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { msg: '获取失败' } })
      }
    })
  },
  /**
   * 获取消息列表
   * @param req 
   * @param res 
   */
  getSession(req: any, res: any) {
    let { uid } = req.body
    model.getSession(uid).then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },
  /**
   * 更新未读信息
   * @param {*} req
   * @param {*} res
   */
  updateUnread(req: any, res: any) {
    let { fid, u_unread, a_unread, send } = req.body
    model.updateUnread({ fid, u_unread, a_unread, send })
    res.send({ ret: 200, data: { msg: '更新成功' } })
  },
  getId(req: any, res: any) {
    let { open_id } = req.body
    model.getId({ open_id }).then((resp: any) => {
      res.send({ ret: 200, data: resp.id })
    })
  },
  getAvatar(req: any, res: any) {
    let data = req.body
    model.getAvatar(data).then((resp: any) => {
      res.send(resp)
    })
  }
}