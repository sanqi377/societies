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
   * 获取社团
   */
  getSocieties() {
    return new Promise((resolve) => {
      db('s_societies').select().then((res: any) => {
        res.forEach((item: any, index: number) => {
          db('s_societies_type').where({ id: item.type_id }).find().then((resp: any) => {
            item.type_id = resp.name
            if (index === res.length - 1) resolve(res)
          })
        });
      })
    })
  },

  /**
   * 获取社团信息
   */
  async getSocietiesInfo(id: number, uid: number) {
    let info = await db('s_societies').where({ id }).find()
    console.log(info)
    let department = await db('s_department').where({ id: info.department }).find()
    console.log(department)
    info.department = department.name

    let fans = await db('s_subscribe').where({ subscribe: uid, be_subscribe: info.admin }).find()
    let number = await db('s_societies_member').where({ societies: info.id }).select()
    info.number = number.length
    if (fans) {
      info.fans = true
    } else {
      info.fans = false
    }
    let dynamic = await db('s_dynamic').where({ uid: info.admin }).select()
    info.dynamic = dynamic.length
    let status = await db('s_apply_log').where({ uid, societies: id }).find()
    if (!status) {
      info.apply = 2
    } else {
      info.apply = status.status
    }
    return info
  },

  /**
   * 获取社团公告
   */
  getNotice(id: number) {
    return db('s_notice').where({ college_id: id }).order({ 'add_time': 'desc' }).select()
  },

  /**
   * 增加社团热度
   */
  async addHots(id: number) {
    let hots = await db("s_societies").where({ id }).find()
    hots.hots++
    let res = await db("s_societies").where({ id }).update({ hots: hots.hots })
    return res
  },
  /**
   * 正在纳新的社团
   * @returns 
   */
  async newSocietiesList() {
    let societies = await db("s_societies").where({ welcome_status: 1 }).select()
    for (let key in societies) {
      let dynamic = await db("s_dynamic").where({ uid: societies[key].admin }).select()
      let fans = await db("s_subscribe").where({ be_subscribe: societies[key].admin }).select()
      let department = await db('s_department').where({ id: societies[key].department }).find()
      let number = await db('s_societies_member').where({ societies: societies[key].id }).select()
      societies[key].dynamic = dynamic.length
      societies[key].fans = fans.length
      societies[key].department = department.name
      societies[key].number = number.length
    }
    return societies
  },

  /**
   * 获取热门社团
   */
  getHotsSocieties(limit: number) {
    return db("s_societies").order({ 'hots': 'desc' }).limit(limit).select()
  },

  /**
   * 申请加入社团
   *
   * @param {object} data
   */
  applySocieties(data: object) {
    return db('s_apply_log').insert(data)
  }
}