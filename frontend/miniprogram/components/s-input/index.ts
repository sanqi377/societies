Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String
    },
    icon: {
      type: String
    },
    type: {
      type: String
    },
    val: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    getVal: function (e: any) {
      let val: string = e.detail.value
      this.triggerEvent('getValue', val)
    }
  }
})
