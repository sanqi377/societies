const express = require("express");
const path = require("path");
const app = express();
var { Verification } = require("./util/jwt");
const { autoLoadRouter } = require("./util/authLoader");
const core = require('./middleware/Core')
core.init(app)
require("./util/mysqlInit");
app.use(express.json());

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
autoLoadRouter(app, path.join(__dirname, "controller"));

app.listen(3000, () => {
  console.log("server start! OK!");
});