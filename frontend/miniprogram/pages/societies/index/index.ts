export { }
const { getFont, ajax, formatMsgTime } = require('../../../utils/util')
let list: any = []
let count = 1
Page({
  list: [],

  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
    this.getDynamic(1)
  },

  goPublish() {
    wx.navigateTo({
      url: "/pages/societies/publish/index"
    })
  },

  getDynamic(page: number) {
    ajax('http://localhost:3000/index/dynamic/getList', { page }).then((res: any) => {
      for (let key in res.data.data) {
        res.data.data[key].create_time = formatMsgTime(res.data.data[key].create_time * 1000)
        list.push(res.data.data[key])
      }
      this.setData({
        list
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let _this = this
    getFont().then((res: boolean) => {
      if (res) {
        _this.setData({
          show: true
        })
      }
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    count++
    this.getDynamic(count)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})