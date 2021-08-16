var { ajax } = require('../../utils/util')
Page({
  data: {
    form: {
      code: ''
    },
    active: false
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