var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 获取社团级别
   */
  getType() {
    return db('s_societies_type').select()
  },

  /**
   * 获取所属院系
   */
  getDepartment() {
    return db('s_department').select()
  },

  /**
   * 添加社团
   * @param data 
   */
  addSocieties(data: any) {
    return db('s_societies').insert(data)
  },

  /**
   * 获取社团
   */
  getSocieties() {
    return db('s_societies').select()
  },

  /**
    * 获取社团信息
    */
  async getSocietiesInfo(id: number) {
    let info = await db('s_societies').where({ id }).find()
    let department = await db('s_department').where({ id: info.department }).find()
    info.department = department.name
    let fans = await db('s_subscribe').where({ be_subscribe: id }).select()
    info.fans = fans.length
    let dynamic = await db('s_dynamic').where({ uid: info.admin }).select()
    info.dynamic = dynamic.length
    let notice = await db('s_notice').where({ id: info.notice_id }).find()
    info.notice = notice
    let admin = await db('s_users').where({ id: info.admin }).find()
    info.admin = admin
    return info

  },

  /**
   * 添加社团公告
   */
  addNotice(data: any) {
    if (data.id) {
      let id = data.id
      delete data.id
      return db('s_notice').where({ id }).update(data)
    } else {
      return db('s_notice').insert(data)
    }
  },

  /**
   * 获取社团公告
   */
  getNotice(id: number) {
    return db('s_notice').where({ college_id: id }).order({ 'add_time': 'desc' }).select()
  },

  /**
   * 删除社团公告
   */
  deleteNotice(id: number) {
    return db('s_notice').where({ id }).delete()
  },

  /**
   * 获取社团分类
   * @returns 
   */
  getClassification(data: any) {
    data.status = 1
    return db('s_classification').where(data).select()
  },

  /**
   * 社团分类添加
   * @param data 
   * @returns 
   */
  addClassification(data: any) {
    return db('s_classification').insert(data)
  },

  /**
   * 社团分类更新
   * @param data 
   * @returns 
   */
  updateClassification(data: any) {
    return db('s_classification').where({ id: data.id }).update(data)
  },
  /**
   * 删除社团菜单
   * @param id 
   * @returns 
   */
  deleteClassification(id: number) {
    return db('s_classification').where({ id }).delete()
  },
  /**
   * 获取当前社团申请用户
   */
  async getApply(id: number) {
    let apply = await db('s_apply_log').where({ societies: id, status: 0 }).select()
    let user = await db('s_users').select()

    apply.forEach((el: any) => {
      user.forEach((element: any) => {
        if (element.id == el.uid) {
          el.user = element
        }
      });
    });
    return apply
  },

  /**
   * 同意用户加入社团
   */
  applyResult(data: any) {
    return db('s_apply_log').where({ id: data.id, }).update({ status: data.status })
  },

  /**
   * 更新社团信息
   * @param data 
   */
  updateSocieties(data: any) {
    return db('s_societies').where({ id: data.id }).update(data)
  },

  /**
   * 获取社团职位列表
   *
   * @param {number} uid
   */
  async getSocietiesJob(societies: number) {
    let job = await db('s_societies_job').where({ societies }).select()
    for (let key in job) {
      let name = await db('s_users').where({ id: job[key].uid }).find()
      job[key].name = name.name
    }
    return job
  },

  /**
   * 获取社团用户列表
   *
   * @param {number} societies
   * @return {*} 
   */
  async getSocietiesUsers(societies: number) {
    let member = await db('s_societies_member').where({ societies }).select()
    for (let key in member) {
      let name = await db('s_users').where({ id: member[key].uid }).find()
      member[key].name = name.name
    }
    return member
  },

  addSocietiesJob(data: any) {
    return db('s_societies_job').insert(data)
  }
}