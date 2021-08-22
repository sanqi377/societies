Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String
    },
    show: {
      type: Boolean
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

  },
  observers: {
    'show': function (show) {
      if (show) {
        setTimeout(() => {
          this.triggerEvent('changeShow', !show)
        }, 2000)
      }
    }
  }
})
