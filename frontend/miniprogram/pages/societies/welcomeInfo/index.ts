export { }
const { getFont, ajax } = require('../../../utils/util')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interduce: ''
  },

  back() {
    wx.navigateBack()
  },

  getValue(e: any) {
    this.setData({
      interduce: e.detail.value
    })
  },

  apply() {
    // let data = {
    //   uid: app.globalData.uid,
    //   societies:
    //   introduce: this.data.value
    // }
    // ajax('http://localhost:3000/index/societies/applySocieties', data).then((res: any) => {
    //   console.log(res.data)
    // })
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
   * 生命周期函数--监听页面显示
   */
  onShow() {

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