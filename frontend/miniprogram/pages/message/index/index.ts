export { }
const { getFont, ajax } = require('../../../utils/util')
const { wlecome } = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    uid: 0
  },

  /**
   * 跳转私聊页面
   */
  goChat(e: any) {
    let send = e.currentTarget.dataset.send
    let accept = e.currentTarget.dataset.accept
    wx.navigateTo({
      url: `/pages/message/chat/index?send=${send}&accept=${accept}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    let _this = this
    this.setData({
      uid: e.uid as any
    })
    /**
     * 加载网络字体
     */
    getFont()

    /**
     * 请求消息列表
     */
    ajax('http://localhost:3000/index/message/getSession', { uid: e.uid }).then((res: any) => {
      _this.setData({
        list: res.data.data
      })
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wlecome({ send: this.data.uid, type: 'welcome' })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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