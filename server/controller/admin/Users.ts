var model = require(__filename.replace(/controller/, 'model'))
var { createJwtToken } = require('../../util/Jwt')
var md5 = require('md5-node')


module.exports = {
  /**
   * 后台登录
   */
  login(req: any, res: any) {
    let data = req.body
    model.isReg(data.username).then((resp: any) => {
      if (!resp) res.send({ ret: 200, data: { type: 'error', msg: '账户不存在' } })
      model.login(data).then((status: boolean) => {
        if (!status) {
          res.send({ ret: 200, data: { type: 'error', msg: '密码错误' } })
        }
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
    model.getUsers(data).then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },
  /**
   * 保存用户信息
   */
  save(req: any, res: any) {
    let data = req.body
    console.log(req.body)
    let password = md5(md5(data.password) + data.salt)
    data.pass = password
    data.salt = "H5nJ8c"
    data.role = req.body.role.id || req.body.role
    delete data.password;
    console.log(data)
    if (data.id) {
      model.updateUser(data).then((result: any) => {
        res.send({ ret: 200, data: { msg: "更新成功" } })
      })
    }
    model.getUserInfo(data.user).then((respo: any) => {
      if (respo) {
        res.send({ ret: 201, data: { msg: "登录名已存在" } })
      } else {
        model.saveUser(data).then((resp: any) => {
          if (resp) {
            res.send({ ret: 200, data: { msg: "添加成功" } })
          } else {
            res.send({ ret: 200, data: { msg: "添加成功" } })
          }
        })
      }
    })

  },
  delect(req: any, res: any) {
    let { id } = req.body
    model.delectUser(id).then((resp: any) => {
      res.send({ ret: 200, data: { msg: "删除成功" } })
    })
  }
}