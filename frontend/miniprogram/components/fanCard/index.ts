export { }
const app = getApp()
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
    },
    /**
     * 关注
     * @param e 
     */
    subscribe(e: any) {
      let index = e.currentTarget.dataset.index
      let data = {
        subscribe: app.globalData.uid,
        be_subscribe: e.currentTarget.dataset.be_subscribe,
        update_time: Date.parse((new Date() as any)) / 1000
      }
      app.globalData.subscribe(data).then(() => {
        this.data.info[index].fans = true
        this.setData({
          info: this.data.info
        })
      })
    },
    /**
     * 取消关注
     * @param e 
     */
    cancelSubscribe(e: any) {
      let index = e.currentTarget.dataset.index
      let data = {
        subscribe: app.globalData.uid,
        be_subscribe: e.currentTarget.dataset.be_subscribe,
      }
      app.globalData.unSubscribe({
        data, success: () => {
          this.data.info[index].fans = false
          this.setData({
            info: this.data.info
          })
        }
      })
      // $Dialog({
      //   title: '温馨提示',
      //   message: '你确定要取消关注吗？',
      //   showCancelButton: true
      // }).then(() => {
      //   ajax('http://localhost:3000/index/user/cancelSubscribe', data).then((res: any) => {
      //     if (res.data.ret === 200) {
      //       $Notify({
      //         type: 'warning',
      //         content: res.data.msg
      //       })
      //     } else {
      //       $Notify({
      //         type: 'error',
      //         content: res.data.msg
      //       })
      //     }
      //     this.data.info[index].fans = false
      //     this.setData({
      //       info: this.data.info
      //     })
      //   })
      // }).catch(() => {
      //   console.log("点击取消按钮回调")
      // })
    }
  }
})
