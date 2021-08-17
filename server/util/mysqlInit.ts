/**
 * mysql 初始化文件
 */

var mysqlServe = require("mysql");
const { setting } = require('../config/setting')

let connection = mysqlServe.createConnection(setting.mysql)
console.log("mysql start! OK!")

connection.connect()

class Mysql {
  table: string
  wheres: string
  limits: string
  sets: string

  /**
   * 构造函数
   * @param table 表名
   * @param wheres 条件
   * @param limits 限制结果数量
   * @param sets 更新时的 value
   */
  constructor(table: string, wheres?: string, limits?: string, sets?: string) {
    this.table = table
    this.wheres = wheres as string
    this.limits = limits as string
    this.sets = sets as string
  }

  /**
   * 拼接 where 条件
   * @param arr 
   * @returns 
   */
  where(...arr: any) {
    arr = arr[0]
    let arrs: string[] = []
    Object.keys(arr).forEach((item: any, index: any) => {
      Object.values(arr).forEach((items: any, idx: any) => {
        if (index === idx) {
          if (typeof (items) === 'string') items = `'${items}'`
          arrs.push(item + '=' + items)
        }
      })
    })
    this.wheres = arrs.toString().replace(',', ' and ')
    return this
  }

  /**
   * 单条数据查询
   * @returns 
   */
  find() {
    this.limits = `limit 1`
    var sql: string = 'select *'
    if (this.table) sql += ` from ${this.table}`
    if (this.wheres) sql += ` where ${this.wheres}`
    if (this.limits) sql += ` ${this.limits}`
    return querys(sql, 'find')
  }

  /**
   * 多条数据查询
   * @returns 
   */
  select() {
    var sql: string = 'select *'
    if (this.table) sql += ` from ${this.table}`
    if (this.wheres) sql += ` where ${this.wheres}`
    return querys(sql, 'select')
  }

  /**
   * 数据更新
   * @param arr 
   * @returns 
   */
  update(...arr: any) {
    arr = arr[0]
    let arrs: string[] = []
    Object.keys(arr).forEach((item: any, index: any) => {
      Object.values(arr).forEach((items: any, idx: any) => {
        if (index === idx) {
          if (typeof (items) === 'string') items = `'${items}'`
          arrs.push(item + '=' + items)
        }
      })
    })
    this.sets = arrs.toString()
    var sql: string = 'update'
    if (this.table) sql += ` ${this.table}`
    if (this.sets) sql += ` set ${this.sets}`
    if (this.wheres) sql += ` where ${this.wheres}`
    return querys(sql)
  }

  /**
   * 数据删除
   * @returns 
   */
  delete() {
    var sql: string = 'delete'
    if (this.table) sql += ` from ${this.table}`
    if (this.wheres) sql += ` where ${this.wheres}`
    return querys(sql)
  }
}

/**
 * 执行 sql 
 * @param sql sql 语句
 * @param type 查询方式 find 单条 select 多条
 * @returns 
 */
let querys = (sql: string, type?: string) => {
  return new Promise((resolve) => {
    connection.query(sql, (err: any, res: any) => {
      if (err) {
        return err
      }
      if (type === 'find') resolve(res[0])
      if (type === 'select') resolve(res)
      if (!type) resolve(res)
    })
  })
}

/**
 * 实例化 db
 * @param table 
 * @returns 
 */
let db = (table: string) => {
  return new Mysql(table)
}

module.exports = {
  db
}