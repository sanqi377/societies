var { ajax } = require('../../../utils/util')
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
              ajax('user/login', { code: res.code }).then((res: any) => {
                let code = res.data.code
                if (code === 201) wx.reLaunch({ url: '/pages/user/reg/index' })
                if (code === 200) {
                  wx.showToast({
                    title: res.data.msg,
                    icon: 'success',
                    duration: 2000,
                    success: () => {
                      wx.setStorage({
                        key: "token",
                        data: res.data.token,
                        success: () => {
                          wx.setStorage({
                            key: "uid",
                            data: res.data.uid,
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
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      },
    })
  },

  /**
   * 暂不登录
   */
  back() {
    wx.switchTab({
      url: '/pages/index/index/index'
    })
  }
})