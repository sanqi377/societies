Component({
  properties: {
    title: {
      type: String
    }
  },
  data: {
    top: wx.getMenuButtonBoundingClientRect().top,
    height: wx.getMenuButtonBoundingClientRect().height,
    scrllor_top: wx.getSystemInfoSync().safeArea.top
  },
  methods: {
    back() {
      wx.navigateBack()
    },
    index() {
      wx.switchTab({
        url: "/pages/index/index/index"
      })
    }
  }
})
