var { ajax } = require('../../utils/util')
Page({
  data: {
    form: {
      phone: '',
      password: '',
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
      ['form.phone']: val.detail
    })
    this.changeActive()
  },

  /**
   * 获取密码
   * @param val 密码
   */
  getPassword(val: any) {
    this.setData({
      ['form.password']: val.detail
    })
    this.changeActive()
  },

  /**
   * 更改登录按钮状态
   */
  changeActive() {
    this.data.form.phone && this.data.form.password ? this.setData({ active: true }) : this.setData({ active: false })
  },

  /**
   * 登录 and 注册
   */
  login() {
    let data = this.data.form
    let _this = this
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        let userInfo = res.userInfo
        wx.setStorage({
          key: "userInfo",
          data: userInfo
        })
        wx.login({
          success(res) {
            _this.setData({
              ['form.code']: res.code
            })
            if (res.code) {
              ajax('http://localhost:3000/index/user/login', data).then((res: any) => {
                let code = res.data.code
                if (code === 201) wx.reLaunch({ url: '/pages/user/reg' })
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      },
    })
  }
})