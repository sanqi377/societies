## frontend 后端部署

### 安装依赖

```bash
npm i
```

### 编译命令

```bash
npm run build
```

编译在 `./dist`

### 运行命令

```bash
npm run dev
```

### 目录结构

```
├── app.ts
├── package.json
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
|    └── Cors.ts
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