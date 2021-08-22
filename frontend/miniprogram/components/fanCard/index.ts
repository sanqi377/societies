// {{component}}.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goInfo(e: any) {
      wx.navigateTo({
        url: "/pages/societies/info/index?id=" + e.currentTarget.dataset.id
      })
    }
  }
})
