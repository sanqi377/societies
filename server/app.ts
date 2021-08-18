const express = require("express");
const path = require("path");
const app = express();

// 跨域处理中间件
const core = require('./middleware/Core')
core.init(app)

// post 数据转 json 中间件
app.use(express.json());

// 前台 token 鉴权
const indexCheckLogin = require('./middleware/index/checkLogin')
indexCheckLogin.init(app)

// 后台 token 鉴权
const adminCheckLogin = require('./middleware/admin/checkLogin')
adminCheckLogin.init(app)

// 路由自动加载
const { autoLoadRouter } = require("./util/authLoader");
autoLoadRouter(app, path.join(__dirname, "controller"));

app.listen(3000, () => {
  console.log("server start! OK!");
});