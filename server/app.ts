export {}
const express = require("express");
var path = require("path");
const app = express();

// 跨域处理中间件
const core = require("./middleware/Core");
core.init(app);

// post 数据转 json 中间件
app.use(express.json());

// 前台 token 鉴权
const indexCheckLogin = require("./middleware/index/checkLogin");
indexCheckLogin.init(app);

// 后台 token 鉴权
const adminCheckLogin = require("./middleware/admin/checkLogin");
adminCheckLogin.init(app);

// 后台 upload 处理
const adminUpload = require("./middleware/admin/upload");
adminUpload.init(app);

// 全局中间件
const allMiddleware = require("./middleware/index");
allMiddleware.init({ app, path: __dirname });

// 路由自动加载
const { autoLoadRouter } = require("./util/authLoader");
autoLoadRouter(app, path.join(__dirname, "controller"));

// websocket init
const websocket = require('./util/websocket')
websocket.init()

app.listen(3000, () => {
  console.log("server start! OK!");
});
