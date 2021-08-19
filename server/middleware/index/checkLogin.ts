var { Verification } = require("../../util/jwt");
var init = (app: any) => {
  app.use('/index', (req: any, res: any, next: any) => {
    let token = req.headers.token
    if (req.path === "/index/user/login" || req.path === '/user/login' || req.path === '/index/user/reg' || req.path === '/user/reg') {
      next()
      return
    }
    console.log(req.path)
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