Page({
  data: {
    info: {
      title: '社团纳新',
      subTitle: '快来找一个中意的社团把！',
      icon: 'https://iconfont.alicdn.com/s/5b4c3bf4-323c-470c-a946-763db030bf9f_origin.svg',
      btnTitle: '我要报名',
      btnPath: ''
    },
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
})
