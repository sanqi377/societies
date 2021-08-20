var { Verification } = require("../../util/jwt")
var { setting } = require("../../config/setting")
var noAuth = setting.index.noAuth
var init = (app: any) => {
  app.use('/index', (req: any, res: any, next: any) => {
    let token = req.headers.token
    if (!Verification(token)) {
      for (let i = 0; i < noAuth.length; i++) {
        if (req.path === noAuth[i].path) {
          next()
          break
        } else {
          if (i === noAuth.length - 1) res.send({ message: "认证失败", code: 400 })
        }
      }
    } else {
      next()
    }
  });
}

module.exports = {
  init
}