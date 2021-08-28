export { }
var id: number
const { ajax } = require('../../../utils/util')
const { $Notify } = require('@sanqi377/qui/s-notify/notify')
const { $Dialog } = require('@sanqi377/qui/s-dialog/dialog')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      fans: false
    }
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
   * 关注社团
   */
  subscribe(e: any) {
    let data = {
      subscribe: app.globalData.uid,
      be_subscribe: e.currentTarget.dataset.be_subscribe,
      update_time: Date.parse((new Date() as any)) / 1000
    }
    app.globalData.subscribe(data).then(() => {
      this.data.info.fans = true
      this.setData({
        info: this.data.info
      })
    })
  },

  /**
   * 取消关注
   */

  cancelSubscribe(e: any) {
    let data = {
      subscribe: app.globalData.uid,
      be_subscribe: e.currentTarget.dataset.be_subscribe,
    }
    $Dialog({
      title: '温馨提示',
      message: '你确定要取消关注吗？',
      showCancelButton: true
    }).then(() => {
      ajax('http://localhost:3000/index/user/cancelSubscribe', data).then((res: any) => {
        if (res.data.ret === 200) {
          $Notify({
            type: 'success',
            content: res.data.msg
          })
        } else {
          $Notify({
            type: 'error',
            content: res.data.msg
          })
        }
        this.data.info.fans = false
        this.setData({
          info: this.data.info
        })
      })
    }).catch(() => {
      console.log("点击取消按钮回调")
    })
  },

  /**
   * 获取社团基本信息
   */
  getSocietiesInfo() {
    var _this = this
    ajax('http://localhost:3000/index/societies/getSocietiesInfo', { id, uid: app.globalData.uid }).then((res: any) => {
      if (res.data.ret === 200) {
        _this.setData({
          info: res.data.data
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