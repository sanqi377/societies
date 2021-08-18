var model = require(__filename.replace(/controller/, 'model'))
var { createJwtToken } = require('../../util/Jwt')

module.exports = {
  /**
   * 后台登录
   */
  login(req: any, res: any) {
    let data = req.body
    model.isReg(data.username).then((resp: any) => {
      if (!resp) res.send({ ret: 200, data: { type: 'error', msg: '账户不存在' } })
      model.login(data).then((status: boolean) => {
        if (!status) res.send({ ret: 200, data: { type: 'error', msg: '密码错误' } })
        let token = createJwtToken(data.username)
        model.getUserInfo(data.username).then((userInfo: any) => {
          res.send({ ret: 200, data: { type: 'success', token, data: userInfo, msg: '登录成功' } })
        })
      })
    })
  },

  /**
   * 后台用户管理
   */
  getUsers(req: any, res: any) {
    let data = req.body
    model.getUsers(data)
    console.log(data)
  }
}