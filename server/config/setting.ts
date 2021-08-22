module.exports = {
  setting: {
    // mysql 配置
    mysql: {
      host: "localhost",
      user: "root",
      // user: "societies",
      // password: "societies",
      password: "root",
      database: "societies",
    },
    // server 配置
    server: {
      port: 3000
    },
    index: {
      noAuth: [
        { path: '/user/login' },
        { path: '/user/reg' },
        { path: '/societies/getSocieties' },
        { path: '/class/getClass' }
      ]
    }
  }
}