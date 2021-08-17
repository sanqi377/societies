var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  /**
   * 后台登录
   */
  login(req: any, res: any) {
    let data = req.body
    model.isReg(data.username).then((resp: any) => {
      if (!resp[0]) res.send({ ret: 200, data: { type: 'error', msg: '账户不存在' } })
      model.login(data).then((status:boolean) => {
        if(!status) res.send({ ret: 200, data: { type: 'error', msg: '密码错误' } })

      })
    })
  }
}