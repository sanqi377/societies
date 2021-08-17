var { Verification } = require("../../util/jwt");

var init = (app: any) => {
  app.use((req: any, res: any, next: any) => {
    let token = req.query.token;
    if (req.path == "login") {
      next();
    }
    if (Verification(token)) {
      res.send({ message: "认证失败", code: 400 });
    } else {
      next();
    }
  });
}

module.exports = {
  init
}