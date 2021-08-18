var { Verification } = require("../../util/jwt");
var init = (app: any) => {
  app.use('/index', (req: any, res: any, next: any) => {
    let token = req.headers.token
    if (req.path == "login" || req.path == "req") {
      next()
    }
    if (!Verification(token)) {
      res.send({ message: "认证失败", code: 400 });
    } else {
      next()
    }
  });
}

module.exports = {
  init
}