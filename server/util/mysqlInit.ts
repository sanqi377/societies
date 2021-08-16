/**
 * mysql 初始化文件
 */

var mysqlServe = require("mysql");
const { setting } = require('../config/setting')

let connection = mysqlServe.createConnection(setting.mysql)
console.log("mysql start! OK!")

connection.connect()

var mysqlQuery = (table: string, field?: string, where?: string, order?: string) => {
  return new Promise((resolve, reject) => {
    var sql: string = 'select'
    field ? sql += ` ${field}` : sql += ` *`
    if (table) sql += ` from ${table}`
    if (where) sql += ` where ${where}`
    if (order) sql += ` order by ${order}`
    connection.query(sql, (err: any, res: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res[0]);
    });
  })
}

module.exports = {
  query: mysqlQuery
}