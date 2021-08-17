var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  /**
   * 获取分类
   */
  getClassification(req: any, res: any) {
    model.getClassification().then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },
  deleteClassification(req: any, res: any) {
    let { id } = req.body
    model.deleteClassification(id).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: { type: 'success', msg: '删除成功' } })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '服务器错误' } })
      }
    })
  }
}