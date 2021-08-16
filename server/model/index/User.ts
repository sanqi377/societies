var { query, insert } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 检测是否注册
   * @param openid wx openid
   */
  isReg(openid: string) {
    let status: boolean
    query('s_users', '', `open_id='${openid}'`) ? status = false : status = true
    return status
  },
  /**
   * 注册
   * @param data 用户信息
   */
  reg(data: any) {
    return insert('s_users', 'open_id,name,class,departments,student_id', `'${data.openid}','${data.name}','${data.class}','${data.departments}','${data.studentId}'`)
  }
}