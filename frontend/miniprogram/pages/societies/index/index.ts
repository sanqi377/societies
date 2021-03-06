export { }
const { ajax, formatMsgTime } = require('../../../utils/util')
const app = getApp()
let list: any = []
let count = 0
let isBottom = false
let type: string
Page({
  data: {
    list: [] as any,
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
    this.getDynamic()
  },

  goPublish() {
    wx.navigateTo({
      url: "/pages/societies/publish/index"
    })
  },

  handle(e: any) {
    list = []
    this.setData({
      list
    })
    count = 0
    isBottom = false
    type = e.detail === 0 ? 'focus' : (e.detail === 1 ? '' : 'societies')
    this.getDynamic(type)
    console.log(e.detail, type)
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
      this.data.list[index].fans = true
      this.setData({
        list: this.data.list
      })
    })
  },

  goInfo(e: any) {
    wx.navigateTo({
      url: "/pages/user/info/index?uid=" + e.currentTarget.dataset.uid
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
        this.data.list[index].fans = false
        this.setData({
          list: this.data.list
        })
      }
    })
  },

  getDynamic(type?: any) {
    count++
    if (!isBottom) {
      console.log(type)
      ajax('Dynamic/getList', { uid: app.globalData.uid, page: count, type }).then((res: any) => {
        wx.stopPullDownRefresh()
        if (res.data.data.length > 0) {
          for (let key in res.data.data) {
            res.data.data[key].create_time = formatMsgTime(res.data.data[key].create_time * 1000)
            list.push(res.data.data[key])
          }
          this.setData({
            list
          })
        } else {
          isBottom = true
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    list = []
    count = 0
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    list = []
    count = 0
    this.setData({
      list
    })
    this.getDynamic(type)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

    this.getDynamic(type)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})