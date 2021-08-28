export { }

const { getFont, ajax } = require('../../../utils/util')

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  /**
   * 获取关注粉丝
   */
  getInfo() {
    ajax('user/getInfo', { uid: app.globalData.uid }).then((res: any) => {
      this.setData({
        info: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var _this = this
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
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
    this.getInfo()
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