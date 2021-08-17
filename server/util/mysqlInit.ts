/**
 * mysql 初始化文件
 */

var mysqlServe = require("mysql");
const { setting } = require('../config/setting')

let connection = mysqlServe.createConnection(setting.mysql)
console.log("mysql start! OK!")

connection.connect()

/**
 * 查询
 * @param table 表名
 * @param field true: 输出单独字段 false 输出所有字段
 * @param where 查询条件 example: id=1
 * @param order 是否排序，需输入字段 example: id desc
 */
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
      resolve(res);
    });
  })
}

/**
 * 插入
 * @param table 表面
 * @param field 插入字段 example: name,title
 * @param value 插入内容 example: '叁柒','测试'
 */
var mysqlInsert = (table: string, field: string, value: string) => {
  return new Promise((resolve, reject) => {
    var sql: string = 'insert into'
    if (table) sql += ` ${table}`
    if (field) sql += ` (${field})`
    if (value) sql += ` VALUES (${value})`
    connection.query(sql, (err: any, res: any) => {
      if (err) {
        try {
        } catch (err) {
          reject(false);
        }
        return;
      }
      resolve(res);
    });
  })
}

module.exports = {
  query: mysqlQuery,
  insert: mysqlInsert
}