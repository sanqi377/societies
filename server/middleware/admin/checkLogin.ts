var { Verification } = require("../../util/Jwt");
var init = (app: any) => {
  app.use('/admin', (req: any, res: any, next: any) => {
    let token = req.headers.authorization
    if (req.path == "login") {
      next()
    }
    if (!Verification(token)) {
      res.send({ message: "认证失败", code: 400 });
    } else {
      next()
    }
  })
}

module.exports = {
  init
}