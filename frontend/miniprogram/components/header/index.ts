Component({
  properties: {
    info: {
      type: Object
    }
  },
  data: {
  },
  methods: {
    goNotify() {
      wx.navigateTo({
        url: '/pages/index/notify/index'
      })
    }
  }
})
