Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/index/index/index",
        "text": "首页",
        "iconPath": "/public/icon/index.svg",
        "selectedIconPath": "/public/icon/index-active.svg"
      },
      {
        "pagePath": "/pages/societies/index/index",
        "text": "社团",
        "iconPath": "/public/icon/societies.svg",
        "selectedIconPath": "/public/icon/societies-active.svg"
      },
      {
        "pagePath": "/pages/message/index/index",
        "text": "消息",
        "iconPath": "/public/icon/message.svg",
        "selectedIconPath": "/public/icon/message-active.svg"
      },
      {
        "pagePath": "/pages/user/my/index",
        "text": "我的",
        "iconPath": "/public/icon/my.svg",
        "selectedIconPath": "/public/icon/my-active.svg"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e: any) {
      const data = e.currentTarget.dataset
      const url = data.path
      if (url === '/pages/user/my/index') {
        var token = wx.getStorageSync('token')
        if (!token) wx.navigateTo({ url: '/pages/user/login/index' })
      }
      wx.switchTab({ url })
    }
  }
})