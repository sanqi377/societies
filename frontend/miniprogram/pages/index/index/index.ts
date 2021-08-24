export { }

const { getFont } = require('../../../utils/util')

Page({
  data: {
    info: {
      title: '社团迎新',
      subTitle: '快来找一个中意的社团把！',
      icon: 'https://iconfont.alicdn.com/s/5b4c3bf4-323c-470c-a946-763db030bf9f_origin.svg',
      btnTitle: '我要加入',
      btnPath: '/pages/welcome/index'
    },
  },
  onLoad() {
    var _this = this
    getFont().then((res: boolean) => {
      if (res) {
        _this.setData({
          show: true
        })
      }
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  goWelcome() {
    wx.navigateTo({
      url: '/pages/societies/welcome/index'
    })
  },
  goAll() {
    wx.navigateTo({
      url: '/pages/societies/all/index'
    })
  }
})
