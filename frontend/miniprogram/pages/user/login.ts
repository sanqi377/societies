var { ajax } = require('../../utils/util')
Page({
  data: {},

  /**
   * 登录 and 注册
   */
  login() {
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
            if (res.code) {
              ajax('http://localhost:3000/index/user/login', { code: res.code }).then((res: any) => {
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