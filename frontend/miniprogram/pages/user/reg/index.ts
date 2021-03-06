var { ajax } = require('../../../utils/util')
Page({
  data: {
    form: {
      phone: 0,
      name: '',
      student_id: '',
      departments: '',
      class: '',
      code: ''
    },
    active: false
  },

  /**
   * 获取手机号
   * @param val 手机号
   */
  getPhone(val: any) {
    this.setData({
      ['form.phone']: Number(val.detail)
    })
    this.changeActive()
  },

  /**
   * 获取姓名
   * @param val 姓名
   */
  getName(val: any) {
    this.setData({
      ['form.name']: val.detail
    })
    this.changeActive()
  },

  /**
   * 获取学号
   * @param val 学号
   */
  getStudentId(val: any) {
    this.setData({
      ['form.student_id']: val.detail
    })
    this.changeActive()
  },

  /**
   * 获取系部
   * @param val 系部
   */
  getDepartments(val: any) {
    this.setData({
      ['form.departments']: val.detail
    })
    this.changeActive()
  },

  /**
   * 获取班级
   * @param val 班级
   */
  getClass(val: any) {
    this.setData({
      ['form.class']: val.detail
    })
    this.changeActive()
  },

  /**
   * 更改登录按钮状态
   */
  changeActive() {
    this.data.form.phone && this.data.form.name && this.data.form.student_id && this.data.form.departments && this.data.form.class ? this.setData({ active: true }) : this.setData({ active: false })
  },

  /**
   * 注册
   */
  reg() {
    let data = this.data.form
    let _this = this
    wx.login({
      success(res) {
        _this.setData({
          ['form.code']: res.code
        })
        if (res.code) {
          ajax('user/reg', data).then((res: any) => {
            if (res.data.code === 200) {
              wx.setStorage({
                key: "token",
                data: res.data.token,
                success: () => {
                  wx.setStorage({
                    key: "openid",
                    data: res.data.openid,
                    success: () => {
                      setTimeout(() => {
                        wx.reLaunch({ url: '/pages/index/index/index' })
                      }, 2000)
                    }
                  })
                }
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  }
})