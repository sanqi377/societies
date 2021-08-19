Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/public/image/index.svg",
        "selectedIconPath": "/public/image/index-active.svg"
      },
      {
        "pagePath": "/pages/societies/index/index",
        "text": "社团",
        "iconPath": "/public/image/societies.svg",
        "selectedIconPath": "/public/image/societies-active.svg"
      },
      {
        "pagePath": "/pages/societies/index/index",
        "text": "消息",
        "iconPath": "/public/image/message.svg",
        "selectedIconPath": "/public/image/message-active.svg"
      },
      {
        "pagePath": "/pages/user/my/index",
        "text": "我的",
        "iconPath": "/public/image/my.svg",
        "selectedIconPath": "/public/image/my-active.svg"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e: any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})