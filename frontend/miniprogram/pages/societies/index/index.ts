var { ajax } = require('../../../utils/util')
Page({
  data: {
    list: {}
  },

  /**
   * 获取社团列表
   */
  getSocieties() {
    var _this = this
    ajax('http://localhost:3000/index/societies/getSocieties').then((res: any) => {
      if (res.data.ret === 200) {
        _this.setData({
          list: res.data.data
        })
      }
    })
  },

  jumpDetails(e: any) {
    var id: number = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/societies/info/index?id=' + id
    })
    console.log(id)
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
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getSocieties()
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