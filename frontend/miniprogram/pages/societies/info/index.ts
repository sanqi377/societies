var id: number
var { ajax } = require('../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    notic: {}
  },
  /**
   * 返回上一页
   */
  back() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 获取社团基本信息
   */
  getSocietiesInfo() {
    var _this = this
    ajax('http://localhost:3000/index/societies/getSocietiesInfo', { id }).then((res: any) => {
      if (res.data.ret === 200) {
        _this.setData({
          info: res.data.data
        })
      }
    })
  },
  /**
   * 获取社团公告
   */
  getNotic() {
    var _this = this
    ajax('http://localhost:3000/index/societies/getNotice', { id }).then((res: any) => {
      if (res.data.ret === 200) {
        _this.setData({
          notic: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    id = Number(e.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getSocietiesInfo()
    this.getNotic()
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