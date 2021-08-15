## 目录结构

```
.
├── frontend # 前台（小程序端）
├── backend # 后台管理系统
├── server # 服务端
└── database # 数据库
```

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
├── app.ts
├── package.json
├── config
|    └── setting.ts
|    └── api.ts
├── controller
│    └── index
|       ├── index.ts
│    └── users
|       ├── users.ts
├── model
│    └── index
|       ├── index.ts
│    └── users
|       ├── users.ts
├── middleware
|    └── cors.ts
|    └── checkLogin.ts
│    └── index
|       ├── index.ts
│    └── users
|       ├── users.ts
├── routes
|    └── index
|       ├── index.ts
│    └── users
|       ├── users.ts
├── util
│    └── util.ts
```