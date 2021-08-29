export { }
const { ajax, formatMsgTime } = require('../../../utils/util')
let list: any = []
let count = 0
let isBottom = false
Page({
  list: [],

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

  getDynamic() {
    count++
    if (!isBottom) {
      ajax('Dynamic/getList', { page: count }).then((res: any) => {
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
    this.getDynamic()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

    this.getDynamic()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})