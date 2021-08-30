export { }
const { ajax, formatMsgTime } = require('../../../utils/util')
const app = getApp()
let uid: number
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    dynamic: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e: any) {
    uid = e.uid
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  getInfo() {
    ajax('user/getInfo', { uid }).then((res: any) => {
      this.setData({
        info: res.data.data
      })
    })
  },

  goChat() {
    ajax('user/getSession', { uid: app.globalData.uid, accept: uid }).then((res: any) => {
      wx.navigateTo({
        url: `/pages/message/chat/index?fid=${res.data.data}&send=${app.globalData.uid}&accept=${uid}`
      })
    })
  },

  getDynamic() {
    ajax('dynamic/getUserList', { uid }).then((res: any) => {
      res.data.data.forEach((item: any) => {
        item.create_time = formatMsgTime(item.create_time * 1000)
      })
      this.setData({
        dynamic: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getInfo()
    this.getDynamic()
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})