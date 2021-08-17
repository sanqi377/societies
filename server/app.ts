const express = require("express");
const path = require("path");
const app = express();
const { autoLoadRouter } = require("./util/authLoader");
const core = require('./middleware/Core')
core.init(app)
require("./util/mysqlInit");
app.use(express.json());
const indexCheckLogin = require('./middleware/index/checkLogin')
indexCheckLogin.init(app)

autoLoadRouter(app, path.join(__dirname, "controller"));

app.listen(3000, () => {
  console.log("server start! OK!");
});