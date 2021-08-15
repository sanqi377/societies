## 目录结构

```
.
├── frontend # 前台（小程序端）
├── backend # 后台管理系统
├── server # 服务端
└── database # 数据库
```

## 编码规范

tab = 2,不要封号

## frontend 后端部署

### 安装依赖

```
npm i
```

### 编译命令

```
npm run build
```

编译在 `./dist`

### 运行命令

```
npm run dev
```

### 目录结构

```
.
├── app.ts # 主入口文件
├── package.json
├── config # 配置文件夹
|    └── setting.ts # 基本配置
|    └── router.ts # 路由配置
├── controller # 控制器文件夹
│    └── index
|       └── index.ts
├── model # 数据库操作
│    └── index
|       └── index.ts
├── middleware # 中间件
|    └── cors.ts
|    └── checkLogin.ts
│    └── index
|       └── index.ts
├── routes # 路由
|    └── index
|       └── index.ts
├── util # 公共
│    └── util.ts
```